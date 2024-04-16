/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let revStr = str.toLowerCase().split('').reverse().join('')
  console.log(revStr);
  console.log(str.toLowerCase());
 
  return  str.toLowerCase() === revStr;
}

module.exports = isPalindrome;
