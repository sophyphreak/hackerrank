const makeAnagram = (a, b) => {
  let mustDelete = 0;
  const aSet = new Set(a);
  const bSet = new Set(b);
  for (let letter of a) {
    if (!bSet.has(letter)) {
      mustDelete++;
    }
  }
  for (let letter of b) {
    if (!aSet.has(letter)) {
      mustDelete++;
    }
  }
  return mustDelete;
};

const assert = require('assert');

assert.equal(makeAnagram('cde', 'abc'), 4);
