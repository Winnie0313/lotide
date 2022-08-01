const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    let headElement = arr[0];
    return headElement;
  }
};

module.exports = head;
