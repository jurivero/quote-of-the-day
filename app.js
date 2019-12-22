var express=require('express');

var app=express();

app.get('/',function(request,responce){
    responce.sendfile(__dirname+'/index.html');
});
var port=process.env.PORT || 8080;
var server=app.listen(port,function(req,res){
    console.log("Cath the action at http://localhost:"+port);
});