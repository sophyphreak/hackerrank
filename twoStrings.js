const twoStrings = (s1, s2) => {
  const subStrings = new Set(s1);
  for (let letter of s2) {
    if (subStrings.has(letter)) {
      return 'YES';
    }
  }
  return 'NO';
};

const assert = require('assert');

assert.equal(twoStrings('hello', 'world'), 'YES');
assert.equal(twoStrings('hi', 'world'), 'NO');