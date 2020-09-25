//output prompt>
process.stdout.write('prompt > ');

//listen for cmnds
process.stdin.on('data', (data) =>{
  let cmn = data.toString().trim();

  process.stdout.write('you typed: ', cmn);
  process.stdout.write('\nprompt > ');
});
