const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
require("./config/passport")(passport);
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const connectDB = require("./config/db");

const PORT = 3005;

//Connect to the database
connectDB();

//Accept req data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Passport middlewares
app.use(passport.initialize());

//App routes
app.use("/api/posts", postRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
