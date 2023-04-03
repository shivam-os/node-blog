const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/*
------ Public Routes ------
*/

//POST method to register a new user
router.post("/signup", userController.signup);

//POST method to login an existing user
router.post("/signin", userController.signin);

module.exports = router;
