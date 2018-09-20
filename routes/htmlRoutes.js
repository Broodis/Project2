var db = require("../models");

module.exports = function (app) {
  // Load index page

  //Loads the signup page 
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/signup2", function (req, res) {
    res.render("signup2");
  });

  app.get("/socials/:id", function (req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function (foundUser) {
      res.render("socials", {
        user: foundUser
      });
    });
  });

  app.get("/signup2", function (req, res) {
    res.render("signup2");
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

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};