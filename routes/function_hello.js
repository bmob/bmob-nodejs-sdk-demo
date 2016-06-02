var BC = require('bmob');

BC.Function.define("hello",

	function onRequest(request,response,modules){
	  response.send("nodejs 环境正在运行");
});

module.export = BC.Function;
