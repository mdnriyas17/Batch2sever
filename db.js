const mongoose = require("mongoose");

const connectDb = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/batch2sever");
    console.log("mongo db connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;