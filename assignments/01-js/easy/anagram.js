/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let sortString = (str1) => {
    return str1.split("").sort().join("");}
 
  let string1 =  sortString(str1);
  let string2 = sortString(str2);

  if (Trim(string1).localeCompare(trim(string2)) == 0) {
    console.log("the Two strings are ANAGRAM");
    return true;
  } 
  else {
    console.log("The Two Strings are not Anagram");
    return false;
  }

}

module.exports = isAnagram;
