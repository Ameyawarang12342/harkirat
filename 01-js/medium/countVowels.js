/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // let declare the count variable
  let count = 0;

  // convert string into lower case;
  let lowerCase = str.toLowerCase();

  //define volwes array

  // check for vowels in string
  for(let i = 0; i <= str.length; i++) {
  if(lowerCase[i] === 'a' ||
  lowerCase[i] === 'e' ||
  lowerCase[i] === 'i' ||
  lowerCase[i] === 'o' ||
  lowerCase[i] === 'u')
  {
  count ++
  }
  }

  return count;
}

module.exports = countVowels;