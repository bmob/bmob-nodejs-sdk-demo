# bmob-nodejs-sdk-demo



## 修改相应的配置文件

在 routes/function.js中，把后台中的配置填入下面：

```
/**
* initialize SDK
*/
BC.initialize('Application ID', 'REST API Key', 'Master Key');
```

## 增加云端代码

在 routes/function.js中，添加方法名为findone的云端代码
```
/**
* 查找GameScore中某个objectId的数据
*/
BC.Function.define("findone",function(request,response){
  var query = new BC.Db();
  var test = query.findOne({
      "table":"GameScore",
      "objectId": request.body.objectId 
    },function(err,data){
      response.send(data);
    });
});
```

## 启动demo

```
node app.js
```

## 测试

```
curl -X POST -d '_e=findone&objectId=423ffdcb9b' http://127.0.0.1:80
```

上面表示调用方面名为“findone”的云端代码，传入参数objectId=423ffdcb9b, 使用的是post方法
