const checkMagazine = (magazine, note) => {
  const magazineWords = {};
  for (let word of magazine) {
    if (magazineWords[word] === undefined) {
      magazineWords[word] = 1;
    } else {
      magazineWords[word]++;
    }
  }
  for (let word of note) {
    if (magazineWords[word] === undefined) {
      console.log('No');
      return 'No';
    }
    if (magazineWords[word] === 0) {
      console.log('No');
      return 'No';
    }
    magazineWords[word]--;
  }
  console.log('Yes');
  return 'Yes';
};

const assert = require('assert');

assert.equal(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  ),
  'Yes'
);
assert.equal(
  checkMagazine(
    ['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']
  ),
  'No'
);
assert.equal(
  checkMagazine(
    ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
    ['ive', 'got', 'some', 'coconuts']
  ),
  'No'
);
