require("dotenv").config();
require("./db");
const express = require("express");
const path = require("path");
const app = express();
const User = require("./routes/User");
var port = process.env.port ? process.env.port : "8080";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/user", User);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
