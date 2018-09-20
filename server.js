// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// Load in the local passport module
var passport = require("./passport");
var session = require('express-session');
var db = require("./models");

var SequelizeStore = require('connect-session-sequelize')(session.Store);


// Prepare express application
var app = express();
// Define the port
var PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Set express to use sessions and the passport authentication state from session
// This lets us store sessions in the database 
var sequelizeSessionStore = new SequelizeStore({
  db: db.sequelize
});

app.use(session({
   secret: 'iugdfnkldfsjklfvcxcvv',  // random giberish
   resave: false, 
   saveUninitialized: false, 
   store: sequelizeSessionStore // set the session store
  })
);
// call sessionStore.sync to make sure the sessions table exists
sequelizeSessionStore.sync();

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// This is a fun little middleware in express that is responsible for setting the `user` property to 
// Every single handlebars render without having to explicitly declare it every time we call `.render`
// By using the `res.locals` object, the variable is immediately available to the handlebars templates in every authenticated call
app.use(function(req, res, next) {
  console.log("Template middleware called");
  // If there's a user, set it down to handlebars under `authenticatedUser`
  if (req.user) {
    console.log("User being set");
    res.locals.authenticatedUser = req.user; 
  }
  next();
});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
