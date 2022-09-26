var fs=require('fs');
fs.appendFile('Welcome.txt','Hello Node', function(err){
    if(err) throw err;
console.log('saved!');
});