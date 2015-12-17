 var net = require('net')  
 var strftime = require('strftime') // not required in browsers
     var server = net.createServer(function (socket) {  
       // socket handling logic  
	//2013-07-06 17:42 
   	socket.write(strftime('%Y-%m-%d %H:%M')) // => April 28, 2011 18:21:08
    	//console.log(strftime('%F %T', new Date(1307472705067))) // => 2011-06-07 18:51:45
	socket.write("\n")
	socket.end()
     })  
     server.listen(process.argv[2])  

