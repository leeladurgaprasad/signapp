var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

var index = require('./routes/index');
var users = require('./routes/users');
var adminRoute = require('./routes/admin/adminRoute');


// api routes
var itemApiRoute = require('./routes/api/itemApiRoute');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: ".hbs",
  //helpers: require("./public/js/helpers.js").helpers, // same file that gets used on our client
  partialsDir: "views/partials/", // same as default, I just like to be explicit
  layoutsDir: "views/layouts/" // same as default, I just like to be explicit
}));
app.set('view options', { layout: 'layouts/main' });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// path to routs 
app.use('/', index);
app.use('/users', users);
app.use('/admin', adminRoute);
app.use('/api/item', itemApiRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
