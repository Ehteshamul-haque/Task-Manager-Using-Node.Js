const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/notFound')
// Middleware
app.use(express.static('./public'))
app.use(express.json())

const port = 5000;
//Routes
app.get("/home", (req, res) => {
  res.send("Welcome!");
});


app.use("/api/v1/tasks",tasks)
app.use(notFound)
// app.get("/api/v1/tasks")   -- get all the the tasks
// app.post("/api/v1/tasks") -- create a new task
// app.get("/api/v1/tasks:id")  -- get single task
// app.path("/api/v1/tasks:id")  -- update task
// app.delete("/api/v1/tasks:id") --- delete task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is running on Port ${port}`));
  } catch (error) {
      console.log(error)
  }
}

start()
