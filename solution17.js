const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #17
// What are all of the letters that never appear consecutively in an English word? 

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

const pattern = /([A-Z])\1+/g;
let letterCombos = new Set(['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ']);
let holdArray = [];
let resultLength = 0;
let result = '';
rl.on('line', (line) => {
    if(pattern.test(line)){
         holdArray = line.match(pattern);
         for(let i = 0; i < holdArray.length; i++){      
            if(letterCombos.has(holdArray[i])){;
                letterCombos.delete(holdArray[i]);
            }
        }
    }
}).on('close', () => {
    
    letterCombos.forEach (function(value) {
        console.log(value);
      })
});


