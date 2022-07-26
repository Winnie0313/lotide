// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  else {
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
  return JSON.stringify(arr1) == JSON.stringify(arr2);
}




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


// Test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);


const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);
