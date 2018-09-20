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
    // If they are not logged in, redirect to the signup page
    if (!req.user) {
      console.log("Redirecing to signup because user is not logged in");
      return res.redirect('/signup');
    }
    res.render("signup2");
  });

  app.post("/signup2", function(req, res) {
    if (!req.user) {
      // They shouldn't be able to get in here if they're not logged in 
      return res.redirect('/signup')
    }

    db.Users.update(req.body,{ where: {id: req.user.id}}).then(() => {
      // Successful update here will redirect back to the dashboard
      return res.redirect('/');
    }).catch(function(err) {
      // Uh oh, there was a problem
      console.log(err);
      res.redirect('/signup2');
    })
  });

  app.get("/socials/:id", function (req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function (foundUser) {
      res.render("socials", {
        user: foundUser,
        layout: 'profile'
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

  app.get('/logout', function(req, res) {
    // Best way to log out is to destroy the session
    req.session.destroy(function() {
      console.log('hello?');
      // Once it's destroyed, redirect to the homepage
      res.redirect('/');
    })
  })

  app.get("/", function (req, res) {

    if (req.user) {
      res.render("dashboard", {
        layout: 'dashboard'
      });
    } else {
      res.render("index");
    }
  });

  app.get("/settings", function (req, res) {
    res.render("settings");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};