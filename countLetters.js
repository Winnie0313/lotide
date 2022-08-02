const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// The function should take in a sentence (as a string)
// return a count of each of the letters in that sentence.
// in other words, return an object include the count of each letter
// letter is the key, value is the number of times the letter exist
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
const countLetters = function(string) {
  const result = {};
  //console.log(string);
  //iterate each character in string
  for (let char of string) {
    //console.log(char);
    //ignore the empty space
    if (char !== " " ){
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;

}

// Test 1
const letters1 = "LHL";

const result1 = countLetters(letters1);

assertEqual(result1['H'], 1)
assertEqual(result1['s'], undefined)
assertEqual(result1['L'], 2)

// Test 2
const letters2 = "Lighthouse Labs lll!";

const result2 = countLetters(letters2);

assertEqual(result2['h'], 2)
assertEqual(result2['s'], 2)
assertEqual(result2['L'], 2)
assertEqual(result2['l'], 3)
assertEqual(result2[' '], undefined)
assertEqual(result2['!'], 1)

module.exports = countLetters;