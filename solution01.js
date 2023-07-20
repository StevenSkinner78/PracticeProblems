const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #1 


let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});


rl.on('line', (line) => {
    //What are all of the words containing UU?
    if(line.indexOf('UU') >= 0){
        console.log(line);
    }
});

