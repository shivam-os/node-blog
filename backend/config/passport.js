require("dotenv").config();
const User = require("../models/userModel");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

//Required details for jwt 
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

//Strategy object for the passport
const strategy = new JwtStrategy(options, async (payload, done) => {
  try {
    //Get the user id & name from payload after verifying the jwt
    const existingUser = await User.findOne({ _id: payload.userId }, { name: 1 });

    //If user found attach user to req object otherwise return false
    if (existingUser) {
      console.log(existingUser)
      return done(null, existingUser);
    } else {
      return done(null, false);
    }
  } catch (err) {
    //If error occurs, pass error to req object and null as the user
    done(err, null);
  }
});

//Export function
module.exports = (passport) => {
  passport.use(strategy);
};
