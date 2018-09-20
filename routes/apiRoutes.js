var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
<<<<<<< HEAD
=======

>>>>>>> f88146ecb9ff21d054b31806c776e486b86dcb03
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
<<<<<<< HEAD
=======
    console.log(req.body);
>>>>>>> f88146ecb9ff21d054b31806c776e486b86dcb03
    db.Users.create(req.body).then(function(dbUsers) {
      res.redirect("/login");
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