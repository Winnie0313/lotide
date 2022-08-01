
// a function that returns an array with only the middle element(s) of the given array
// case 1: For arrays with one or two elements, there is no middle. Return an empty array
// case 2: For arrays with odd number of elements, an array containing a single middle element should be returned.
// care 3: For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// refactor the code
const middle = function(arr) {
  //console.log("arr is: ", arr);
  let middleElement = [];
  const oddLength = arr.length % 2 !== 0;
  //console.log("oddLength is: ", oddLength);
  const startIndex = Math.floor(arr.length/2) - (oddLength ? 0 : 1);
  //console.log("start index is: ", startIndex);
  const endIndex = startIndex + (oddLength ? 1 : 2);
  //console.log("end index is: ", endIndex);
  if (arr.length <= 2) {
    return middleElement;
  } else {
    middleElement = arr.slice(startIndex, endIndex);
  }
  //console.log("middle element is: ", middleElement);
  return middleElement;

}


module.exports = middle;

