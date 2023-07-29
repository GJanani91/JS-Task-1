const numbers = [12, 34, 46, 22, 67, 89];
let sum=0;
let length=numbers.length;
let average;
function averageNumbers(){
for(let i=0;i<numbers.length;i++){
sum=sum+numbers[i];
average=sum/length;
}
}
averageNumbers();
console.log("The sum of all given numbers:  "+sum);
console.log(average);