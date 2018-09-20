var db = require("../models");
// Load in local passport module
var passport = require("../passport");

module.exports = function(app) {
  // Get all users
  // @TODO Do we need this route defined?
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user -- used for initial signup POST
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(user) {

      // Now that we have created a user, lets log in this user before we redirect
      // Passport attaches nice easy convenient method on the express `req` object to do this
      // See http://www.passportjs.org/docs/login/ for more details
      req.login(user, function(err) {
        // If there was an error logging in, we log it to the console and send a 500 to the user
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        console.log("Redirecting the user to /signup 2");
        console.log(req.user);
        // Otherwise, redirect to signup2
        return res.redirect("/signup2");
      })
    }).catch(function(err) {
      console.log(err);
      // @TODO Handle this better if there is a validation error from sequelize
      // It can be accessed from err.errors which is an array
      // For example...
      // if (err.errors) {
      //  err.errors.forEach(function(errorObject) {
      //   console.log(errorObject.message)
      //  }
      // }
      res.redirect('/signup');
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
// Search experince for the user
app.post("/api/search/:phone", function(req, res) {
    db.Users.findOne({where: {phoneNumber: req.params.phone}}).then(function(foundUser) {
      res.json(foundUser);
    }).catch(function(err) {
      res.sendStatus(500);
    });
  });
}