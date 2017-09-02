var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');

var server = express();

server.listen(8081, function() {
	console.log('Listen 8081 port.');
});

server.use(bodyParser.urlencoded( {extend: true} ));
server.use('/', routes);