var BC = require('bmob');

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
