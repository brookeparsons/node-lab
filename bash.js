//output prompt>
process.stdout.write("prompt > ");

//listen for cmnds
process.stdin.on("data", (data) => {
  const { dir } = require("console")
  const cmd = data.toString().trim();
  const path = require("path");
  if (cmd === "pwd") {
    process.stdout.write(`path: ${dir.path}`);
  } else {
    process.stdout.write("you typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});

;
//replicate pwd
