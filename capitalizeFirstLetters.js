let sentence = "hello world";
// use spiit to seperate words
let words = sentence.split(" "); // splits words which isi hello, and world
let result = "";
for (let word of words){
    result += word[0].toUpperCase() + word.slice(1) + " "; 

}
console.log(result);
