// through2 is a transform stream takes input data and applies an operation to the data to produce the output data
// convert data from 'process.stdin' to upper-case data on 'process.stdout'

var through = require('through2')
var stream = through(write,end)

function write(buffer,encoding,next){
	var buf = buffer.toString()
	buf = buf.toUpperCase()
	this.push(buf)
	next()
}
function end(done){
	done()
}

process.stdin.pipe(stream).pipe(process.stdout)
