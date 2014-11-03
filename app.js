
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var staticpages = require('./routes/static');
var uploadpages = require('./routes/upload');
var templatepages = require('./routes/template');
var order = require('./routes/order');
var http = require('http');
var path = require('path');
var multiparty = require('multiparty');
var mongoose = require('mongoose');
var Order = require('./public/schemas/order');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon2.ico')); 
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.session({
  secret: 'I hope this is a good secret',
  cookie: {}
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', staticpages.about);
app.get('/upload-design', uploadpages.render);
app.post('/material-select', uploadpages.save);
app.get('/template-design', templatepages.templateSelect);
app.post('/confirm', order.confirm);
app.get('/help', staticpages.help);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express HTTP server listening on port ' + app.get('port'));
});
