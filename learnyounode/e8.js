var buffer  = require('buffer')
var http = require('http')  
     http.get(process.argv[2], function (response) {  
       var result = new Buffer('')
       response.on('data', function (data){
	result = Buffer.concat([result,data]);
       })  
       response.on('error', console.error)  
       response.on('end', function(end){ 
	
	console.log(result.length)
	console.log(result.toString())
	}) 
     })  
