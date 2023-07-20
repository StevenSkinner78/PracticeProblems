const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #11

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

let counter = 0;
rl.on('line', (line) => {
    //How many words contain the substring "TYPE”?
    if(line.search('TYPE') >= 0){       
        counter++;
    }
}).on('close', () => {
    console.log(counter);

});





