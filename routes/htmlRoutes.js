var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUsers
      });
    });
  });

  // Load results page and pass in an example by phone number
  app.get("/user/:phoneNumber", function(req, res) {
    db.Users.findOne({ where: { phoneNumber: req.params.phoneNumber } }).then(function(dbUsers) {
      res.render("example", {
        users: dbUsers
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
