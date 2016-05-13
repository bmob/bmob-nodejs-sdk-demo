var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routesIndex = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routesIndex);

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Express server listening on port %d", server.address().port);
});
