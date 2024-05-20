function isAnagram(str1, str2) {
  // Check if the lengths of the strings are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to lowercase before sorting
  const lowercaseStr1 = str1.toLowerCase();
  const lowercaseStr2 = str2.toLowerCase();

  // Convert strings to arrays, sort them, and join them back into strings
  const sortedStr1 = lowercaseStr1.split('').sort().join('');
  const sortedStr2 = lowercaseStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;