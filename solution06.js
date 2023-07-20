const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #6

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    // What are all of the words that have a B and an X and are less than 5 letters long?
    if(line.indexOf('B') >= 0 && line.indexOf('X') >= 0 && line.length < 5){
        console.log(line);
    }
});