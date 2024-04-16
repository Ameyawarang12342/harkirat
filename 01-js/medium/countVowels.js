/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const vowels  = ["a" , "i", "e", "o", "u"];


function countVowels(str) {
    // Your code here
    let count = 0;
    for(const element of str){
      if(vowels.includes(element.toLowerCase())){
          count++;
      }
    };
    return count;
}

module.exports = countVowels;