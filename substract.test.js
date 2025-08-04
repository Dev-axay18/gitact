const subtract = require('./substract');

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});
