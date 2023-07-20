const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #7

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    // What are all of the words that both start and end with a Y?
    if(line.startsWith('Y') && line.endsWith('Y')){
        console.log(line);
    }
});