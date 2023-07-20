const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #3


let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    // What are all of the words containing a Q but not a U?
    if(line.indexOf('Q') >= 0 && line.indexOf('U') < 0){
        console.log(line);
    }
});
