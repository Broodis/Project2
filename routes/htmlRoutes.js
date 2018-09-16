var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {

    db.Users.findAll({}).then(function (dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUsers
      });
    });
  });
  //Loads the signup page 
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/socials", function (req, res) {
    res.render("socials");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/settings", function (req, res) {
    res.render("settings");
  });

  // Load results page and pass in an example by phone number
  app.get("/user/:phoneNumber", function (req, res) {
    db.Users.findOne({ where: { phoneNumber: req.params.phoneNumber } }).then(function (dbUsers) {
      res.render("example", {
        users: dbUsers
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};