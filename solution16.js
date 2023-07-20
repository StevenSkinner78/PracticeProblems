const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #16
// What is the longest palindrome?

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

let holdArray = [];
let resultLength = 0;
let result = '';
rl.on('line', (line) => {
    if(isPalindrome(line)){
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

function isPalindrome(text){
    let a = text.split('');
    let reversedString = a.reverse().join('');

    if(text == reversedString){
        return true;
    }else{
        return false;
    }
}