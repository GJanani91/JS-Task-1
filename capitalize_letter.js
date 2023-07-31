const string = "hello world janani!";
const word = string.split(" ");
console.log(word);
for(i=0;i<word.length;i++){
word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
}
console.log(word);
let result=word.join(" ");
console.log(result);

