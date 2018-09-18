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
 //Loads the signup page 
  app.get("/signup", function(req, res) {
      res.render("signup");
    });
  
    app.get("/socials", function(req, res) {
      res.render("socials");
    });

    app.get("/login", function(req, res) {
      res.render("login");
    });

    app.get("/", function(req, res) {
      res.render("index");
    });

    app.get("/signup2", function(req, res) {
      res.render("signup2");
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
