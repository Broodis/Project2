var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Users.findAll({}).then(function(keepInTouch) {
      res.render("index", {
        msg: "Welcome!",
        examples: keepInTouch
      });
    });
  });

  app.get("/signup", function(req, res) {
      res.render("signup");
    });
  

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function(keepInTouch) {
      res.render("example", {
        example: keepInTouch
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
