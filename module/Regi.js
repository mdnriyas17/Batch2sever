const mongoose = require("mongoose");

const RegiSchema = new mongoose.Schema({
  name: String, //name of the user like "shubham"
  email: String, //email of the user like "shubham@123"
  password: String, //password of the user like "shubham@123"
  phone: Number, //phone number of the user like 1234567890
});

module.exports = mongoose.model("userdetails", RegiSchema);
