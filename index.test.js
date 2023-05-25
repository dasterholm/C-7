const reverse = require('./index');

test('reverse string "Dmitry"', () => {
  expect(reverse('Dmitry')).toBe('yrtimD');
});
