require("dotenv").config();
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

/*
------ Public Routes ------
*/

//POST method to create a new user
exports.signup = async (req, res) => {
  try {
    //Handle errors coming from signup validator middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    //Check if email already exists in the database
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(403).json({
        err: "User already exists! Try logging in or sign up with different credentials.",
      });
    }

    //Hash the password before storing it in database
    const encryptedPassword = await bcrypt.hash(password, 10);

    //Save the user in database with hashed password
    const newUser = await User.create({
      name: name,
      email: email,
      password: encryptedPassword,
    });

    return res.status(201).json({ msg: "User created successfully!" });
  } catch (err) {
    console.log(err);
    return res
      .send(500)
      .json({ err: "An error has occured! Please try again later." });
  }
};

//POST method to login an existing user
exports.signin = async (req, res) => {
  try {
    //Handle errors coming from sign in validator middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    //Check if user already exists in the database
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ err: "User not found! Check email again or try signing up." });
    }

    //Compare the entered password with the stored passowrd in the database
    const doesPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!doesPasswordMatch) {
      return res
        .status(400)
        .json({ err: "Incorrect email or password! Please try again." });
    }

    //If password matches then assign a jwt & send it
    const payload = { userId: existingUser._id };
    const bearerToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({ token: "Bearer " + bearerToken });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "An error has occured! Please try again later." });
  }
};
