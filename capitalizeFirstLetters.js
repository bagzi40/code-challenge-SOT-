let sentence = "hello world";
// use spiit to seperate words
let words = sentence.split(" "); // splits words which isi hello, and world
let capitalisedWords = words.map(function(word) {
// makes first letter capital
return word[0]. toUpperCase() + word.slice(1);
});
// join the words back together agian
let result = capitalisedWords.join(" ");
console.log(result);
