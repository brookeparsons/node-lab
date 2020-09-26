//accepts file and return the contents
//use fs to access this info
module.exports.cat = cat();

function cat (){
  const fs = require('fs');
  fs.readFile('/Users/brookeparsons/grace-hopper-fullstack/Rope-Dude/RopeDude.js', (err, data) => {
    if(err){
      console.log('here');
      throw err;
    }
    console.log(data);
  })

}
