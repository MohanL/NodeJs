var fs = require('fs');
var path = process.argv[2];
var extension ="." + process.argv[3];

function noname(){
	fs.readdir(path, function callback(error, list){
		if(error)
			console.log("error on checking the directory");
		else
		{	
			var arr = list;
			for (var e in arr){
				if (arr[e].indexOf(extension) !== -1)
					console.log(arr[e]);
			}			
		
		}	

	});
};

noname();
