const minimumBribes = q => {
  let bribes = 0;
  const qLength = q.length;
  for (let current = qLength; current > 1; current--) {
    const index = q.length - 1;
    if (q[index] === current) {
      q.splice(index, 1);
    } else if (q[index - 1] === current) {
      q.splice(index - 1, 1);
      bribes++;
    } else if (q[index - 2] === current) {
      q.splice(index - 2, 1);
      bribes++;
      bribes++;
    } else {
      console.log('Too chaotic');
      return 'Too chaotic';
    };
  };
  console.log(bribes);
  return bribes;
}


const assert = require('assert');

assert.equal(minimumBribes([2, 1, 5, 3, 4]), 3, 'test 1');
assert.equal(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic', 'test 2');
assert.equal(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]), 'Too chaotic', 'test 3');


assert.equal(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]), 7, 'test 4');


assert.equal(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]), 4, 'test 5')
