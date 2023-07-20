const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #9

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    // What are all of the words that have all 5 vowels, in any order?
    if(line.indexOf('A') >= 0 && line.indexOf('E') >= 0 && line.indexOf('I') >= 0 
    && line.indexOf('O') >= 0 && line.indexOf('U') >= 0){
        console.log(line);
    }
});