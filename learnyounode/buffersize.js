var buffer = require('buffer')
var a = new Buffer("abc")
var b = new Buffer("cde")

a = Buffer.concat([a,b])
console.log(a.toString())
