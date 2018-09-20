var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
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
    db.User.findOneby(req.params.phone);
    if (phone == null || phone == 'undefined') {
      res.status(404);
    } else {
      res.json(phone);
    }
  });
}