const isBalanced = s => {
  if (s.length % 2 !== 0) {
    return 'NO';
  };
  const arr = s.split('');
  const stack = [];
  let pair;
  while (arr.length > 0) {
    const current = arr.shift();
    switch(current) {
      case '{':
      case '[':
      case '(':
        stack.push(current);
        break;
      case '}':
        pair = stack.pop();
        if (!(pair === '{')) {
          return 'NO'
        }
        break;
      case ']':
        pair = stack.pop();
        if (!(pair === '[')) {
          return 'NO'
        }
        break;
      case ')':
        pair = stack.pop();
        if (!(pair === '(')) {
          return 'NO'
        }
        break;
      default:
        return 'NO';
    }
  }
  return 'YES';
};

const assert = require('assert');

assert.equal(isBalanced('{[()]}'), 'YES', 'test 1');
assert.equal(isBalanced('{[(])}'), 'NO', 'test 2');
assert.equal(isBalanced('{{[[(())]]}}'), 'YES', 'test 3');
assert.equal(isBalanced('{(([])[])[]}'), 'YES', 'test 4');
assert.equal(isBalanced('{(([])[])[]]}'), 'NO', 'test 5');
assert.equal(isBalanced('{(([])[])[]}[]'), 'YES', 'test 6')