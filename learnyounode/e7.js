try {
//    console.log(require.resolve("http"));
    var http = require("http");
} catch(e) {
    console.error("http is not found");
    process.exit(e.code);
}


http.get(process.argv[2], function(response) {
 // console.log("Got response: " + response.statusCode);
  response.on('data', function(data) {
	console.log(data.toString());
  });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
