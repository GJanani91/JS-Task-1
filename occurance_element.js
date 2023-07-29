const numbers = [1, 2, 3, 5, 8, 9, 5, 6, 7, 1, 3, 5];
let count=0;
function occuranceElement(){
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===5)
    count++;
}
}
occuranceElement();
console.log("The element 5 occurred: "+count+"  "+"times");