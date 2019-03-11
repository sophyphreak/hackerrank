const minimumBribes = q => {
  for (let index = 0; index < q.length; index++) {
    const person = q[index];
    if (person - index > 3) { // if this is true, then person bribed too many times
      console.log('Too chaotic');
      return 'Too chaotic';
    }
  };
  let bribes = 0;
  let arr = q.slice();
  const sortedArr = arr.slice();
  sortedArr.sort();
  let numberSorted = 0;
  while(!arraysEqual(arr, sortedArr)) {
    for (let index = numberSorted; index < arr.length; index++) {
      const cur = arr[index];
      if (cur - 1 === index) {
        numberSorted++;
      } else {
        break;
      }
    }
    for (let index = numberSorted; index < arr.length; index++) {
      const cur = arr[index];
      const next = arr[index + 1];
      if (cur > next) {
        arr = swap(arr, index, index + 1);
        bribes++;
      }
    }
  }
  console.log(bribes);
  return bribes;
};

const swap = (arr, a, b) => {
  let result = arr.slice();
  const temp = result[a];
  result[a] = result[b];
  result[b] = temp;
  return result;
}

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const assert = require('assert');

assert.equal(minimumBribes([2, 1, 5, 3, 4]), 3, 'test 1');
assert.equal(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic', 'test 2');
assert.equal(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]), 'Too chaotic', 'test 3');
assert.equal(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]), 7, 'test 4');
assert.equal(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]), 4, 'test 5')
