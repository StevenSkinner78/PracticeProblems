const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #14
// What is the longest word that contains no vowels?

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

let holdArray = [];
let resultLength = 0;
let result = '';
rl.on('line', (line) => {
    if(line.indexOf('A') < 0 && line.indexOf('E') < 0 && line.indexOf('I') < 0 
    && line.indexOf('O') < 0 && line.indexOf('U') < 0){
        holdArray.push(line);
    }
}).on('close', () => {
    if(holdArray.length > 0){
        resultLength = holdArray[0].length;
    }
    for(let i = 1; i < holdArray.length; i++){
        if(holdArray[i].length > resultLength){
            resultLength = holdArray[i].length;
            result = holdArray[i];
        }
    }
    console.log(result);
});