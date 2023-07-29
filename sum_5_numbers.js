const number= [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
number.sort(function(a, b){return b - a});
let sum=0;

function sumOf5Numbers(){
for(i=0;i<5;i++){
    sum=sum+number[i];
}
}
sumOf5Numbers();
console.log(number);
console.log("The sum of first 5 largest numbers is:   "+sum);