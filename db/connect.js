const mongoose = require("mongoose");

// const connectionID =
//   "mongodb+srv://Ehtesham:ehaque_786@nodeexpressproject.vtszk33.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
    return mongoose
    .connect(url ,  {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
}

module.exports = connectDB
