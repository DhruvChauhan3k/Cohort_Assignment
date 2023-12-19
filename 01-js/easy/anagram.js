/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let m = {};
  let n = {};

  for (let i = 0; i < str1.length; i++) {
    m[str1[i].toLowerCase()] = (m[str1[i].toLowerCase()] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    n[str2[i].toLowerCase()] = (n[str2[i].toLowerCase()] || 0) + 1;
  }

  for (let i = 0; i < str1.length; i++) {
    if (n[str1[i].toLowerCase()] !== m[str1[i].toLowerCase()]) return false;
  }

  return true;
}

module.exports = isAnagram;
