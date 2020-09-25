function pwd() {
  const { cmd } = require("./bash");
  if (cmd === "pwd") {
    console.log(process.cwd());
  } 
  process.stdout.write("\nprompt > ");
//   process.stdout.write("you typed: " + `${cmd}`);
}

module.exports.pwd = pwd();
