const array1 =  [22, 58, 69, 12, 47, 55, 7, 36, 89, 75];;
const array2 = [12, 34, 46, 22, 67, 47, 89];
let array3=[];
function sameElement()
{
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] ===array2[j]) {
        array3.push(array1[i]);

      }
    }
  }
}
sameElement();
  console.log(array3);