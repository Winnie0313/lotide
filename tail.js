// return a new array include all the elements from the input array except the first element
const tail = function(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};




module.exports = tail;