const Task = require("../modals/task");
// READ ALL TASKS
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    // res.status(200).json({ task });
    res.status(200).json({status: 'success', data: {task, nbHits: task.length}})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// CREATE
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// READ SINGLE TASK
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID }).exec();
    if (!task) {
      return res.status(404).json({ msg: `No task with Id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json(err);
  }
};
// DELETE
const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `No task with Id ${taskID}` });
    }
    res.status(200).json({ task });
    //OR
    //  res.status(200).send()
  } catch (err) {
    res.status(500).json(err);
  }
};
// UPDATE
const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `No task with Id ${taskID}` });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
