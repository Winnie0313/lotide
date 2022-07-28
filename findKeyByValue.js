//  takes in an object and a value
//  it should scan the object 
//  return the first key which contains the given value. 
//  If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, value) {
  let result;
  for (let item in object) {
    if (object[item] === value) {
      result = item;
    }
  }
  return result;
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);