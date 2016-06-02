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

BC.Function.define("xml",
	/**
	* 旧版本的云端代码,原型迁移
	*/
	function onRequest(request,response,modules){
		response.end(request.body.xml.ToUserName);
		// var xml2js = modules.oXml2js;　//实现xml和js格式之间的相互转换
		// var result = { xml: {MsgType: 'text'}};                   
  //       var builder = new xml2js.Builder();
  //       var xml = builder.buildObject(result); //利用模块xml2js，把json对象转换为一个xml文本
  //       response.set('Content-Type', 'text/xml'); //设置返回的http header
  //       response.send(xml);
  		// response.end("hello");
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
	    	response.send111(data);
	    });
});

BC.Function.define("testfunction",
	/**
	* 旧版本的云端代码
	*/
	function onRequest(request,response,modules){
		var functions = modules.oFunctions;

		    functions.run({
		       "name": "findone",
		       "data":{"objectId":"7bf254c044"}
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

BC.Function.define("hello",

	function onRequest(request,response,modules){
	  response.send("nodejs 环境正在运行");
});

module.export = BC.Function;
