/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let count = 0;
    for(const a of str){
      if(vowels.includes(a)) count++;
    }
    return count;
}

module.exports = countVowels;
