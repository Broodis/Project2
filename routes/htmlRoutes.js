var db = require("../models");
// Load in local passport module
var passport = require("../passport");

module.exports = function (app) {
  // Load index page

  //Loads the signup page 
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/signup2", function (req, res) {
    console.log("Calling signup2");
    // If they are not logged in, redirect to the signup page
    if (!req.user) {
      console.log("Redirecing to signup because user is not logged in");
      return res.redirect('/signup');
    }
    console.log("About to signup2");
    res.render("signup2");
  });

  app.get("/socials/:id", function (req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function (foundUser) {
      res.render("socials", {
        user: foundUser,
        layout: 'dashboard'
      });
    });
  });


  app.get("/login", function (req, res) {
    res.render("login");
  });

  // When a user posts to the login form, we use the local authentication strategy we declared
  // If it fails, it will redirect back to /login
  app.post('/login', 
    passport.authenticate('local', {failureRedirect: '/login'}), 
    function(req, res) {
      // This will get called if we are successful
      // When we are successful, we want to redirect the user back to the homepage
      res.redirect('/');
    })

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