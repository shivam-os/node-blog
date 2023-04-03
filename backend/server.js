const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const PORT = 3005;

//Accept json data
app.use(express.json());

//App routes
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
