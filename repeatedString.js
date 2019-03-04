const repeatedString = (s, n) => {
  let repeats = 0;
  let substringRepeats = 0;
  for (let letter of s) {
    if (letter === 'a') substringRepeats++;
  }
  repeats = Math.floor(n / s.length) * substringRepeats;
  const lastLetters = s.slice(0, n % s.length);
  for (let letter of lastLetters) {
    if (letter === 'a') repeats++;
  }
  return repeats;
};

const assert = require('assert');
assert.equal(repeatedString('aba', 10), 7);
assert.equal(repeatedString('a', 1000000000000), 1000000000000);
assert.equal(repeatedString('abcac', 10), 4);
assert.equal(repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570), 16481469408);
