var bl= require('bl')
var http = require('http')

/*
http.get(process.argv[2], function(res){
	res.on('data',function(data){
		bl.append(data)
	})
	res.on('end',function(){
		console.log(bl.length)
		console.log(bl.toString())
	})
})
*/

//response.pipe(bl(function (err, data) { /* ... */ }))  
     // or  
//response.pipe(concatStream(function (data) { /* ... */ })) 

http.get(process.argv[2], function(res){
	res.pipe(bl(function(err,data){
	 if(err)
		console.log(err)
	 data = data.toString()  
         console.log(data.length)  
         console.log(data)  
	}))
})

/*
var http = require('http')  
     var bl = require('bl')  
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
*/
