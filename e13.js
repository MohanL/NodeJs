var port = process.argv[2]
var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){

	if(req.method == 'GET')
		res.writeHead(200, {'Content-Type': 'application/json'});
		var parsedReq = url.parse(req.url, true);
		var date = new Date(parsedReq.query['iso']);
		if (parsedReq.pathname == "/api/parsetime") {
			date = '{"hour":'+ date.getHours() +',"minute":'+ date.getMinutes() +',"second":'+ date.getSeconds() +'}';
        	} 
		else if (parsedReq.pathname == "/api/unixtime") {
        		date = '{"unixtime":'+ Date.parse(date.toISOString()) +'}';
        	}
        	res.end(date);
	

})
server.listen(port)
console.log("server is listening at " + port)
