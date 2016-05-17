var BC = require('bmob');

/**
* initialize SDK
*/
// BC.initialize('85b56934cce1129e59a795da547c68e6', '42257d72ebd4b8b518084fabda56ae6e', 'e09fb5cbb5b825c78989504604c0dcff');

BC.Function.define("find",
	/**
	* 新版本的远端代码
	*/
	function(request,response,modules){
		var query = modules.oData;
		var test = query.find({
	      	"table":"GameScore"
	    },function(err,data){
	    	response.send(data);
	    });
});

BC.Function.define("findone",
	/**
	* 旧版本的云端代码,原型迁移
	*/
	function onRequest(request,response,modules){
		var query = modules.oData;
		var test = query.findOne({
				"table":"GameScore",
				"objectId": request.body.objectId
			},function(err,data){
				response.send(data);
		});
});

BC.Function.define("test",
	/**
	* 旧版本的云端代码
	*/
	function onRequest(request,response,modules){
		var query = modules.oData;
		var test = query.find({
	      	"table":"GameScore"
	    },function(err,data){
	    	response.send(data);
	    });
});


module.export = BC.Function;
