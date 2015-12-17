var fs = require('fs');
var arg = process.argv[2];

function noname(){
	fs.readFile(arg,function callback(err,fileContents){
		if(err)	
			console.log('error');
		else{
			var buf = fileContents.toString();
			var arr = buf.split('\n');
			console.log(arr.length-1);	
		}
	});
}

noname();
