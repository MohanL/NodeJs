// https://nodejs.org/docs/latest/api/modules.html
// export module function
/*
var fs = require('fs');
var result = new Array(); 
exports.list = function(path, rextension,callback){	
		var extension = "."+rextension;
		fs.readdir(path,function(err,data){
			if(err)
				return callback("error");
			else{
				var arr = data;
				for( var e in arr){
					if (arr[e].indexOf(extension) !== -1)
                                        	result.push(arr[e]);			
				
				}
				return callback(null,result);
			}
		});		
	}
*/

var fs = require('fs');
var result = new Array(); 
module.exports = function(path,rextension,callback) {
	var extension = "."+rextension;
	fs.readdir(path,function(err,data){
		if(err)
			return callback(err);
		else{
			var arr = data;
			for( var e in arr){
				if (arr[e].indexOf(extension) !== -1)
                                	result.push(arr[e]);			
			
			}
			return callback(null,result);
		}
	});		
}
