

// pwd()
//output prompt>
process.stdout.write("prompt > ");
//listen for cmnds
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  module.exports.cmd = cmd
  const {pwd} = require('./pwd-commands')
});
;


