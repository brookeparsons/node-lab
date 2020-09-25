//output prompt>
process.stdout.write("prompt > ");

//listen for cmnds
process.stdin.on("data", (data) => {
  const { dir } = require("console")
  const cmd = data.toString().trim();
  //const path = require("path");
  const filePath = process.stdout.fd;
  if (cmd === "pwd") {
    //process.stdout.write(filePath);
    console.log(process.cwd());
  } else {
    process.stdout.write("you typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});

;
//replicate pwd
