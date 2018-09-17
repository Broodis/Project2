var express = require('express');
var path = require('path');
var logger = require ('morgan');
var cookieParser = require('cooke-parser');
var bodyParser = require('body-parser');
var hbs = require ('express-handlebars');

var routes = require('.routes/index');

var app = express();

//View initial engine set-up
app.engine('hbs', hbs({extname:'hbs', defaultLayout: 'layout', layoutsDir: _dirname + '/views/layouts'}));
app.set('views', path.join(_dirname, 'views'));
app.set('views', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(dirname, 'public')));

app.use ('/', routes);
 
//function for catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});