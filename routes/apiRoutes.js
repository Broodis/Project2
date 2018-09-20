var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
      res.redirect("/signup2");
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.redirect("/signup2");
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