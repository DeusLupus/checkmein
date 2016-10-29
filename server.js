// Dependencies
// ============
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser'); // for working with cookies
var bodyParser = require('body-parser');
var session = require('express-session'); 
var methodOverride = require('method-override'); // for deletes in express


// Our model controllers (rather than routes)
var application_controller = require('./controllers/application_controller');

var main_controller = require('./controllers/main_controller');

var users_controller = require('./controllers/users_controller');

var attendance_controller = require('./controllers/attendance_controller');

var landing_controller = require('./controllers/landing_controller');

var career_controller = require('./controllers/career_controller');

var homework_controller = require('./controllers/homework_controller');



// Express settings
// ================

var app = express();

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 120000 }, resave: true, saveUninitialized: true}));
app.use(cookieParser());


// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', application_controller);
app.use('/main', main_controller);
app.use('/users', users_controller);
app.use('/attendance', attendance_controller);
app.use('/landing', landing_controller);
app.use('/career', career_controller);
app.use('/homework', homework_controller);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});

// our module get's exported as app.
module.exports = app;

