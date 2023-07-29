const numbers = [12, 34, 45, 12, 67, 89, 12];
let index=[];
function indexNumbers(){
for(let i=0;i<numbers.length;i++){
if(numbers[i]===12)
index.push(i);
}
}
indexNumbers();
console.log("The indices of 12 are:  "+index);
