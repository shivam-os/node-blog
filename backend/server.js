const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const PORT = 3005;

app.get("/api/home", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
