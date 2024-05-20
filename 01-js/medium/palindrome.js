function isPalindrome(str) {
  // Remove punctuation marks and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Remove all spaces
  const noSpacesStr = cleanedStr.replace(/\s/g, '');

  // Check if the cleaned string is equal to its reverse
  const reversedStr = noSpacesStr.split('').reverse().join('');
  return noSpacesStr === reversedStr;
}

module.exports = isPalindrome;