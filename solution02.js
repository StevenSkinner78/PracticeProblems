const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #2

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    //What are all of the words containing an X and a Y and a Z?
    if(line.indexOf('X') >= 0 && line.indexOf('Y') >= 0 && line.indexOf('Z') >= 0){
        console.log(line);    }
});