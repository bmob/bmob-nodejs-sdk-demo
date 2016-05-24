var BC = require('bmob');

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

//测试get请求
BC.Function.define("findget",

	function onRequest(request,response,modules){
		var query = modules.oData;
		var test = query.find({
	      	"table":"GameScore"
	    },function(err,data){
	    	response.send(data);
	    });
});

//测试get请求
BC.Function.define("findoneget",

	function onRequest(request,response,modules){
		var query = modules.oData;
		var test = query.findOne({
				"table":"GameScore",
				"objectId": request.query.objectId
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

BC.Function.define("updateuser",

	function onRequest(request,response,modules){
	  var db = modules.oData;
	  db.setHeader({"X-Bmob-Master-Key":"e09fb5cbb5b825c78989504604c0dcff"});
	  db.updateUserByObjectId({"objectId":"3ae0755405" ,data:{"username":"123"}},function(err,data){
	    response.send(data);
	  }); 
});

module.export = BC.Function;
