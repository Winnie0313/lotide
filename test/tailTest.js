const assert = require('chai').assert;
const tail = require('../tail');


describe("tail tests", () => {
  it("returns ['Lighthouse', 'labs'] for ['Yo Yo', 'Lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'labs']), ['Lighthouse', 'labs']);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"