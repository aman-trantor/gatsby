const jwt = require("jsonwebtoken");
const Users = require("../model/UserModel");
const bcrypt = require("bcrypt");

module.exports = {
  Authenticate: (req, res) => {
    const token = req.headers["authorization-token"];
    if (!token) {
      return res.render("loginform", {
        err: "",
      });
    } else {
      return res.render("dashboard");
    }
  },

  LoginUser: async (req, res) => {
    console.log(JSON.stringify(req.body));
    if (!req.body.password || !req.body.email) {
      console.log("here");
      return res.render("loginform", {
        err: "Email and Password are required",
      });
    }

    await Users.findOne(
      {
        email: req.body.email,
        password: bcrypt.compareSync(req.body.password, 10),
      },
      (err, data) => {
        if (err) {
          return res.render("loginform", {
            err: "Please check email or password",
          });
        }

        jwt.sign(
          { data },
          process.env.jwtPayload,
          { expiresIn: "8h" },
          (err, token) => {
            return res.status(200).send(token);
          }
        );
      }
    );
  },
};
