/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sortString(str){
  return str.toLowerCase().split("").sort().join("");
}

function isAnagram(str1, str2) {
      const s1 = sortString(str1);
      const s2 = sortString(str2);
      return s1 === s2;
}


module.exports = isAnagram;
