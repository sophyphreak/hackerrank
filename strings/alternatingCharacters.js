const alternatingCharacters = s => {
  let deletions = 0;
  for (let index = 1; index < s.length; index++) {
    if (s[index] === s[index - 1]) {
      deletions++;
    }
  }
  return deletions;
};

const assert = require('assert');

assert.equal(alternatingCharacters('AAAA'), 3);
assert.equal(alternatingCharacters('BBBBB'), 4);
assert.equal(alternatingCharacters('ABABABAB'), 0);
assert.equal(alternatingCharacters('BABABA'), 0);
assert.equal(alternatingCharacters('AAABBB'), 4);
