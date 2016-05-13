var BC = require('bmob');

/**
* initialize SDK
*/
BC.initialize('85b56934cce1129e59a795da547c68e6', '42257d72ebd4b8b518084fabda56ae6e', 'e09fb5cbb5b825c78989504604c0dcff');

BC.Function.define("find",function(request,response){
	var query = new BC.Db();
	var test = query.find({
      "table":"GameScore"
    },function(err,data){
    	response.send(data);
    });
});

BC.Function.define("findone",function(request,response){
  var query = new BC.Db();
  var test = query.findOne({
      "table":"GameScore",
      "objectId": request.body.objectId 
    },function(err,data){
      response.send(data);
    });
});

BC.Function.define("test",function(request,response){
	response.send('simple test');
});


module.export = BC.Function;