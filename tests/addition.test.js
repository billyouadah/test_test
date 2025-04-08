// tests/addition.test.js
const addition = require('../src/addition');

test('addition de 2 et 3 donne 5', () => {
  expect(addition(2, 3)).toBe(5);
});
