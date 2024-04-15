/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // check for empty string
  if(str.length == 0) {
    return true;
  }
    
  // logic for palindrom
  let text = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  const palindrom = text.split('').reverse().join('');
    
   // check for palindrom
  if(palindrom === text) {
    return true
  } else {
    return false;
  }
}

module.exports = isPalindrome;
