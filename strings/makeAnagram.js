const makeAnagram = (a, b) => {
  let mustDelete = 0;
  const aSorted = a.split('').sort().join('');
  const bSorted = b.split('').sort().join('');
  let aIndex = 0;
  let bIndex = 0;
  while (true) {
    if (aSorted[aIndex] === undefined) {
      mustDelete += bSorted.length - bIndex;
      break;
    }
    if (bSorted[bIndex] === undefined) {
      mustDelete += aSorted.length - aIndex;
      break;
    }
    if (aSorted[aIndex] === bSorted[bIndex]) {
      aIndex++;
      bIndex++;
    } else if (aSorted[aIndex] < bSorted[bIndex]) {
      aIndex++;
      mustDelete++;
    } else {
      bIndex++;
      mustDelete++;
    }
  }
  return mustDelete;
};

const assert = require('assert');

assert.equal(makeAnagram('cde', 'abc'), 4);
assert.equal(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'), 30);
assert.equal(makeAnagram('showman', 'woman'), 2);
