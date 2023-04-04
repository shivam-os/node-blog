const express = require("express");
const router = express.Router();
const passport = require("passport")
const userController = require("../controllers/userController");
const userValidator = require("../middlewares/userValidator");

/*
------ Public Routes ------
*/

//POST method to register a new user
router.post("/signup", userValidator.signup, userController.signup);

//POST method to login an existing user
router.post("/signin", userValidator.signin, userController.signin);

router.get("/protected", passport.authenticate("jwt", {session: false}), (req, res) => {
  console.log(req.user)
  res.send("You are on a protected route!")
})

module.exports = router;
