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

// a function that returns an array with only the middle element(s) of the given array
// case 1: For arrays with one or two elements, there is no middle. Return an empty array
// case 2: For arrays with odd number of elements, an array containing a single middle element should be returned.
// care 3: For arrays with an even number of elements, an array containing the two elements in the middle should be returned


////original code
// const middle = function(arr) {
//   let middleElement = [];
//   if (arr.length <= 2) {
//     return middleElement;
//   } else if (arr.length % 2 !== 0) {
//     middleElement = arr.slice((arr.length - 1)/2, (arr.length + 1)/2 );
//   } else if (arr.length % 2 === 0) {
//     middleElement = arr.slice((arr.length/2)-1, (arr.length/2) + 1);
//   }
//   return middleElement;

// }

// refactor the code
const middle = function(arr) {
  console.log("arr is: ", arr);
  let middleElement = [];
  const oddLength = arr.length % 2 !== 0;
  console.log("oddLength is: ", oddLength);
  const startIndex = Math.floor(arr.length/2) - (oddLength ? 0 : 1);
  console.log("start index is: ", startIndex);
  const endIndex = startIndex + (oddLength ? 1 : 2);
  console.log("end index is: ", endIndex);
  if (arr.length <= 2) {
    return middleElement;
  } else {
    middleElement = arr.slice(startIndex, endIndex);
  }
  console.log("middle element is: ", middleElement);
  return middleElement;

}


// Tests
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]) , [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);