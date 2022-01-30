var exp=require("express");
var app=exp();

app.listen(8081,function() {
console.log("Connection Started.....")

});

app.get("/index",function(req,res) {
	res.sendFile(__dirname+"/index.html");
});
