const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
const userdetails = require("./module/Regi");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, resposnse) => {
  resposnse.status(200).json({
    message: "success",
  });
});

app.post("/login", async (request, resposnse) => {
  try {
    const users = await userdetails.create(request.body);
    if (users) {
      resposnse.status(200).json({
        message: "user created successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.put("/myprofile/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await userdetails.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    if (user) {
      response.status(200).json({
        message: "user updated successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/myprofile/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await userdetails.findByIdAndDelete(id);
    if (user) {
      response.status(200).json({
        message: "user deleted successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/myprofile/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await userdetails.findById(id);
    if (user) {
      response.status(200).json({
        message: "user found successfully",
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
  }
})

app.post("/loginuser", async (request, resposnse) => {
  try {
    const user = await userdetails.findOne({ email: request.body.email });
    if (!user) {
      resposnse.status(200).json({
        message: "user not found",
      });
    }

    if (user.password !== request.body.password) {
      resposnse.status(200).json({
        message: "password is incorrect",
      });
    }

    if (user) {
      resposnse.status(200).json({
        message: "user logged in successfully",
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

PORT = 7000;

app.listen(PORT, () => {
  db();
  console.log(`server is running on port ${PORT}`);
});

//Mondodb ==> No SQL Database
// Format ==> JSON
// find ==> select to give all data for example get all products
// findOne ==> select to give only one data for example get one product
// findbyId ==> select to give only one data for example get one product
// insertOne ==> insert for example insert one product
// insertMany ==> insert
// create ==> insert for example create product to create one product
// deleteOne ==> delete
// findbyIdAndDelete ==> delete
// deleteMany ==> delete
// updateOne ==> update
// updateMany ==> update
// update ==> update
// delete ==> delete


// create new user == > Create 
// get by id == > Read single user data
// update ==> update
// delete ==> delete
// post login ==> get login user data read

// amazon page 
// step 1 ==> register, post data 
// step 2 ==> Profile view data , get data by id or token
// step 3 ==> update profile , put data
// step 4 ==> delete profile , delete data only id or token