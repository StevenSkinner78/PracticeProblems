const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #15
// Which of the letters Q, X, and Z is the least common?

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

let holdArray = [];
let qCounter = 0;
let xCounter = 0;
let zCounter = 0;

rl.on('line', (line) => {
    if(line.indexOf('Q') >= 0 || line.indexOf('X') >= 0 || line.indexOf('Z') >= 0){
        holdArray.push(line);
    }
}).on('close', () => {
    for(let i = 1; i < holdArray.length; i++){
        let holdString = holdArray[i];
        for(let j = 0; j < holdString.length; j++){
            let char = holdString.charAt(j);
            if(char == 'Q'){
                qCounter++;
            }else if(char == 'X'){
                xCounter++;
            }else if(char == 'Z'){
                zCounter++;
            }
        }
    }

        if(qCounter < xCounter && qCounter < zCounter){
            console.log('Q is the least common.');
        }else if(xCounter < qCounter && xCounter < zCounter){
            console.log('X is the least common.');
        }else if(zCounter < qCounter && zCounter < xCounter){
            console.log('Z is the least common.');
        }
});