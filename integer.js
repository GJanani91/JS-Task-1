const numbers = [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
numbers.sort(function(a, b){return a - b});
console.log(numbers);
let x=[];
let sum=0;
let average;
function averageNumbers(){
for(let i=0;i<5;i++){
sum=sum+numbers[i];
average=sum/6;
}
}
averageNumbers();
console.log("The sum of least 5 numbers:  "+sum);
console.log("The average of least five elements are: "+average);
console.log("In integer:  "+Math.floor(average));