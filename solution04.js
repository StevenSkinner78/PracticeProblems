const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #4

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    // What are all of the words that contain the word CAT and are exactly 5 letters long?
    if(line.indexOf('CAT') >= 0 && line.length == 5){
        console.log(line);
    }
});