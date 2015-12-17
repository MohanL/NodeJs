var a = require('./e6a.js');
/* works for the function of the module
a.list(process.argv[2],process.argv[3],function(err,data){
	if(err)
		console.log(err);
	else
	{
		for (var e in data)
			console.log(data[e]);
	}
});
*/

a(process.argv[2],process.argv[3],function(err,data){
	if(err)
		console.log(err);
	else
	{
		for(var e in data)
			console.log(data[e]);
	}
});
