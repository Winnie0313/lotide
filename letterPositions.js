
// return all the indices (zero-based positions) in the string where each character is found.
// return an object: key is the character, value is an array with the indices where the character is found in string
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // iterate each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]){
        results[sentence[i]].push(i);
      } else {
        // if results[sentence[i]], which is the key:value pair, does not exist, create one.
        results[sentence[i]] = [i];
      }
        
      } 
    }
    return results;
  }


// compare two arrays and returns true of false, based on a perfrct match
const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
}

// return a message to tell if two arrays are the same
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Test

const string1 = "hello ";
const result1 = letterPositions(string1);
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1[" "], undefined);



