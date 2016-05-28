
var domain = require('domain');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routesIndex = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-domain-middleware'));
app.use('/', routesIndex);

app.use(function errorHandler(err, req, res, next) {
  
  res.status(500).send("there is an error in callback function");

});

//把端口从3000改为80
var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Express server listening on port %d", server.address().port);
});
