const minimumBribes = q => {
  for (let index = 0; index < q.length; index++) {
    const person = q[index];
    if (person - index > 3) { // if this is true, then person bribed too many times
      console.log('Too chaotic');
      return 'Too chaotic';
    }
  };
  let bribes = 0;
  let sorted = 0;
  while (sorted < q.length) {
    for (let index = 1; index < q.length - sorted; index++) {
      const prev = q[index - 1];
      const cur = q[index];
      if (prev > cur) {
        q = swap(q, index - 1, index);
        bribes++;
      };
    }
    sorted++;
  }
  console.log(bribes);
  return bribes;
}

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
}

const assert = require('assert');

assert.equal(minimumBribes([2, 1, 5, 3, 4]), 3, 'test 1');
assert.equal(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic', 'test 2');
assert.equal(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]), 'Too chaotic', 'test 3');


assert.equal(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]), 7, 'test 4');


assert.equal(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]), 4, 'test 5')
