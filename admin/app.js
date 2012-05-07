/**
 * Module dependencies.
 */

var express = require('express'),
  mongoose = require('mongoose');

var app = module.exports = express.createServer();
var routes = require('./routes');
var MongoStore = require('connect-mongo');

mongoose.connect('mongodb://localhost/testapplication');

// Configuration
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'my_secret',
    store: MongoStore({
      db: 'unicorns'
    })
  }));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

app.get('/test', function(req, res, next) {
  console.log(req.session);
  res.send('foo');
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
