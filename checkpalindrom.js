let str='level';
checkPalindrome(str);
function checkPalindrome(str) {
    const x = str.split('');
    const y = x.reverse();
    const z = y.join('');
   /* if(str===z)//(str===z)?console.log("true"):colsole.log("false.");
    console.log("true");
    else
    console.log("false");*/
(str===z)?console.log("true"):console.log("false");
  }