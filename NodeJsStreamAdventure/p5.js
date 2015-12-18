var split = require('split')
var through = require('through2')

var counter = 0
process.stdin
    .pipe(split())
    .pipe(through(function (line,_,next){
	if(counter % 2 != 0)
		this.push(line.toString().toUpperCase())
	else
		this.push(line.toString().toLowerCase())
	this.push('\n')
	counter++
	next()
    }))
    .pipe(process.stdout)


