const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #12
// Create and print an array containing all of the words that end in "GHTLY"

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

let result = [];
rl.on('line', (line) => {
    if(line.endsWith('GHTLY')){       
        result.push(line);
    }
}).on('close', () => {
    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }

});