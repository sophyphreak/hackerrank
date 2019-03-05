const minimumSwaps = arr => {
  let swaps = 0;
  
};

const swap = (inputArr, val1, val2) => {
  const arr = inputArr.slice();
  const temp = arr[val1];
  arr[val1] = arr[val2];
  arr[val2] = temp;
  return arr;
}

const assert = require('assert');

assert.equal(minimumSwaps([7, 1, 3, 2, 4, 5, 6]), 5);
assert.equal(minimumSwaps([2, 3, 4, 1, 5]), 3);
assert.equal(minimumSwaps([1, 3, 5, 2, 4, 6, 7]), 3);
