// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    let object1KeysArray = Object.keys(object1);
    for (let object1Key of object1KeysArray) {
      if (Array.isArray(object1[object1Key])) {
        if (!eqArrays(object1[object1Key], object2[object1Key])) {
          return false;
        }
      } else if (object1[object1Key] !== object2[object1Key])
        return false;
    }
    return true;
  }
};

// compare two arrays and returns true of false, based on a perfrct match
const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc);


const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2);

