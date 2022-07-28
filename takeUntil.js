// the function takes in an array, and the callback
// returns a slice of the array with elements taken from the beginning
// keep going until the callback/predicate returns a truthy value
// the callback should only be provided one value: The item in the array
const takeUntil = function(array, callback) {
  const results = [];
  // iterate each item
  for (let item of array) {
    // callback function takes item as argument
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

// compare two arrays and returns true of false, based on a perfrct match
const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// return a message to tell if two arrays are the same
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


// Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);