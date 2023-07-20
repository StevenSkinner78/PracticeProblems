const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #8

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    // What are all of the words with no vowel and not even a Y?
    if(line.indexOf('A') < 0 && line.indexOf('E') < 0 && line.indexOf('I') < 0 
    && line.indexOf('O') < 0 && line.indexOf('U') < 0 && line.indexOf('Y') < 0){
        console.log(line);
    }
});