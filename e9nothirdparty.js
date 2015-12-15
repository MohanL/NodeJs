var http = require('http')
var events = require('events')
var eventEmitter = new events.EventEmitter();
var buf = require('buffer')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var flag1 = false
var flag2 = false
var flag3 = false

var a = new Buffer(0)
var b = new Buffer(0)
var c = new Buffer(0)

var listner = function listner() {   
   console.log("all done")
   console.log(a.toString());
   console.log(b.toString());
   console.log(c.toString());
}
var listner1 = function listner1() {
	console.log("a is done")
	flag1 = true;
	console.log(flag1)
}
var listner2 = function listner2() {
	console.log("b is done")
	flag2 = true;
	console.log(flag2)
}
var listner3 = function listner3() {
	console.log("c is done")
	flag3 = true;
	console.log(flag3)
}

eventEmitter.addListener('urldone', listner);
eventEmitter.addListener('url1done', listner1);
eventEmitter.addListener('url2done', listner2);
eventEmitter.addListener('url3done', listner3);


http.get(url1, function(res){
	res.on('data',function(data){
		a = Buffer.concat([a,data])
	})
	
	res.on('end',function(){
		eventEmitter.emit('url1done');	
	})
})


http.get(url2, function(res){
	res.on('data',function(data){
		b = Buffer.concat([b,data])
	})
	
	res.on('end',function(){
		eventEmitter.emit('url2done');	
	})
})
http.get(url3, function(res){
	res.on('data',function(data){
		c = Buffer.concat([c,data])
	})
	
	res.on('end',function(){
		eventEmitter.emit('url3done');	
	})
})

do
{
	console.log("waiting")
}
while((flag1 == false) || (flag2 == false) || (flag3 == false));



//eventEmitter.emit('urldone');	
