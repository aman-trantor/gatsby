const express = require("express");
const app = express.Router();

const AuthController = require("../controller/AuthController");
const UserController = require("../controller/UserController");

app.get("/", AuthController.Authenticate);
app.post("/", AuthController.LoginUser);

app.get("/login", AuthController.Authenticate);
app.post("/register", UserController.register);
module.exports = app;
