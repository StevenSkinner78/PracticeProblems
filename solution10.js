const fs = require('fs');
const readline = require('readline');

// Programming practice problems
// Solution #10
// What are all of the words that have all 5 vowels, in alphabetical order?

let use_file = './sowpods.txt';
let rl = readline.createInterface({
    input : fs.createReadStream(use_file)
});

rl.on('line', (line) => {
    if(containsAllVowels(line)){
        if(isAlphabetical(line)){
            console.log(line);
        }
        
    }
});

function containsAllVowels(word){
    let result = false;
    if(word.indexOf('A') >= 0 && word.indexOf('E') >= 0 && word.indexOf('I') >= 0 
    && word.indexOf('O') >= 0 && word.indexOf('U') >= 0){
        result = true;
    }
    return result;
}

function isAlphabetical(word){
    let indexOfA = 0;
    let indexOfE = 0;
    let indexOfI = 0;
    let indexOfO = 0;
    let indexOfU = 0;

    for(let i = 0; i < word.length; i++){
        if (word.charAt(i) == 'A') {
            indexOfA = i;
        }
        if (word.charAt(i) == 'E') {
            indexOfE = i;
        }
        if (word.charAt(i) == 'I') {
            indexOfI = i;
        }
        if (word.charAt(i) == 'O') {
            indexOfO = i;
        }
        if (word.charAt(i) == 'U') {
            indexOfU = i;
        }
        if(indexOfA > indexOfE || indexOfA > indexOfI || indexOfA > indexOfO ||
            indexOfA > indexOfU) {
               return false;
          }
          //check e alphabetical
          if(indexOfE > indexOfI || indexOfE > indexOfO ||
            indexOfE > indexOfU) {
               return false;
          }
          //i
          if(indexOfI > indexOfO || indexOfI > indexOfU) {
               return false;
          }
          //o
          if(indexOfO > indexOfU) {
               return false;
          }
    }
    return true;
}