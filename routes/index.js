
/*
 * GET home page.
 */

// var BC = require('../lib/bmobcloud');
var BC = require('bmob');
var func = require('./function');

var express = require('express');
var router = express.Router();

BC.initialize('85b56934cce1129e59a795da547c68e6', '42257d72ebd4b8b518084fabda56ae6e', 'e09fb5cbb5b825c78989504604c0dcff');
var modules = BC.getModules(BC);

router.post('/', function(request, response) {

  	/*
	调用方式:
	curl -X POST -d '_e=test&objectId=66911e175a' http://127.0.0.1:3000
  	*/
	var funcName = BC.Function.func(request.body._e);
	// console.log("running function: "+request.body._e);
	if (typeof(funcName) == 'undefined') {
		response.send('function '+request.body._e+'not exists');
		return ;
	}
	funcName(request,response,modules);

});

module.exports = router;
