const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #5

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    // What are all of the words that have no E or A and are at least 15 letters long?
    if(line.indexOf('E') < 0 && line.indexOf('A') < 0 && line.length >= 15){
        console.log(line);
    }
});