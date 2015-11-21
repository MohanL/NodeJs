const fs = require('fs'); 
fs.watch('target.txt', function() {
console.log("File 'target.txt' just changed!"); 
});
console.log("now we are watching at file target.txt");
