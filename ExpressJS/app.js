const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/about", (req, res) => {
  res.status(200).send("about us");
});

app.get("/contact", (req, res) => {
  res.status(200).send("contact us");
});




app.listen(3000, () => {
  console.log("server is running ");
});
