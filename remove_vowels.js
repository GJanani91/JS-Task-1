const str = "Hello, World!";
function removeVowels() {
    return str.replace(/[AEIOU]/gi, '');
  }
  const result = removeVowels();
  console.log(result); 