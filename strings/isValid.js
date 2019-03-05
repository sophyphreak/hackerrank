const isValid = s => {
  if (s.length === 1) return 'YES';
  const sHash = {};
  for (let letter of s) {
    if (sHash[letter] === undefined) {
      sHash[letter] = 1;
    } else {
      sHash[letter]++;
    }
  }
  const sArr = [];
  for (let letter in sHash) {
    sArr.push(sHash[letter]);
  }
  sArr.sort();
  if (Math.max(...sArr) !== Math.min(...sArr)) {
    if (Math.min(...sArr) === 1 && Math.max(...sArr) === sArr[1]) {
      return 'YES';
    }
    if (Math.max(...sArr) !== Math.min(...sArr) + 1) {
      return 'NO';
    }
    sArr.pop();
    if (Math.max(...sArr) !== Math.min(...sArr)) {
      return 'NO';
    }
  }
  return 'YES';
};

const assert = require('assert');

assert.equal(isValid('aabbcd'), 'NO', 'test 1');
assert.equal(isValid('aabbccddeefghi'), 'NO', 'test 2');
assert.equal(isValid('abcdefghhgfedecba'), 'YES', 'test 3');
assert.equal(isValid('xxxaabbccrry'), 'NO', 'test 4');
assert.equal(isValid('aaaabbcc'), 'NO', 'test 5');
assert.equal(isValid('aabbc'), 'YES', 'test 6');