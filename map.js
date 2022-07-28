// the map function takes in an array to map, and a callback fuction
// returns a new array based on the result of the call back function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



// return a message to tell if two arrays are the same
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// compare two arrays and returns true of false, based on a perfrct match
const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
}

// Tests
const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const words2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(words2, word => word[1]);
assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);
