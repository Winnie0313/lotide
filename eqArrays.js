

// compare two arrays and returns true of false, based on a perfrct match
const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}


module.exports = eqArrays;