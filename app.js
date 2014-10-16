
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var staticpages = require('./routes/static');
var uploadpages = require('./routes/upload');
var templatepages = require('./routes/template');
var http = require('http');
var path = require('path');
var multiparty = require('multiparty');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', staticpages.about);
app.get('/upload-design', uploadpages.render);
app.post('/upload', uploadpages.save);
app.get('/template-design', templatepages.render);
app.get('/help', staticpages.help);
// app.get('/material-select');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
