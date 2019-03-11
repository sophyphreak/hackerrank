const minimumBribes = q => {
  let bribes = 0;
  const qLength = q.length;
  for (let index = qLength; index > 1; index--) {
    const targetLocation = q.indexOf(index);
    q.splice(targetLocation, 1);
    bribes += index - targetLocation - 1;
    if (index - targetLocation - 1 > 2) {
      console.log('Too chaotic');
      return 'Too chaotic';
    }
  }
  console.log(bribes);
  return bribes;
}


const assert = require('assert');

assert.equal(minimumBribes([2, 1, 5, 3, 4]), 3, 'test 1');
assert.equal(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic', 'test 2');
assert.equal(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]), 'Too chaotic', 'test 3');


assert.equal(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]), 7, 'test 4');


assert.equal(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]), 4, 'test 5')
