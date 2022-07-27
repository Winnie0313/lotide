// compare two arrays and returns true of false, based on a perfrct match
const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

// can also try use includes() to check repeat items
// this function take in a source array and a itemsToRemove array
// return a new array with only those elements from source that are not present in the itemsToRemove array.
// original array shouldn't be modified --> make a cope of the source

const without = function (source, itemsToRemove) {
  const sourceCopy = [...source];
  for (let s = 0; s < sourceCopy.length; s++) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      // debut step 2:
      //console.log("about to compare:", sourceCopy[s], itemsToRemove[i])
      if (sourceCopy[s] === itemsToRemove[i]) {
        //debug step 1:
        //console.log("found an element to delete:", sourceCopy[s], s);
        sourceCopy.splice(s, 1);
      }
    }
  }
  return sourceCopy;

}


// tests
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);