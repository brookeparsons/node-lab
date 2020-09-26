module.exports.ls = ls();


function ls (){
  const fs = require('fs');
//list the files in wd
fs.readdir('./', 'utf8', (err, files) => {
  if(err){
    throw err;
  }else{
    process.stdout.write(files.join('\n'));
    process.stdout.write('\nprompt > ');
  }
})
}
