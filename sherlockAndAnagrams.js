const sherlockAndAnagrams = (s) => {
  let pairs = 0;
  for (let anagramlength = 0; anagramlength < s.length - 1; anagramlength++) {
    for (let index = 0; index < s.length; index++) {
      if (index + anagramlength > s.length) break;
      
    }
  }
};

const eqSet = (as, bs) => {
  if (as.size !== bs.size) return false;
  for (let a of as) if (!bs.has(a)) return false;
  return true;
}

const assert = require('assert');

assert.equal(sherlockAndAnagrams('abba'), 4);
assert.equal(sherlockAndAnagrams('abcd'), 0);
assert.equal(sherlockAndAnagrams('ifailuhkqq'), 3);
assert.equal(sherlockAndAnagrams('kkkk'), 10);
assert.equal(sherlockAndAnagrams('cdcd'), 5);
