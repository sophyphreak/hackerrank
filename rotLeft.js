const rotLeft = (a, d) => {
  const result = [];
  result.push(...a.slice(d))
  result.push(...a.slice(0, d));
  return result;
};

const assert = require('assert');

assert.deepEqual(rotLeft([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]);
