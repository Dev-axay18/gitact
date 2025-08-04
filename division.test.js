const division = require('./division');

test('divides 5 by 3 to equal approximately 1.6667', () => {
  expect(division(5, 3)).toBeCloseTo(1.6667, 2);
});
