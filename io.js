//demo of file io in node js 
var filestream = require('fs');

filestream.readFile('example_log.txt',function (err, logData){
	if (err) throw err;
  	var text = logData.toString();
  	console.log(text);

  	var results = {};

   var lines = text.split('\n');
  
   lines.forEach(function(line) {
    var parts = line.split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);
    
    // this js dict is pretty cool
    if(!results[letter]) {
      results[letter] = 0;
    }
    
   results[letter] += parseInt(count);
   });
  
   console.log(results);
   // { A: 2, B: 14, C: 6 }
});