const reverseInt = require('../reverseInt')

test('reverseInt(1)', () => {
  expect(reverseInt(-98)).toBe(-89)
  expect(reverseInt(-5)).toBe(-5)
  expect(reverseInt(123)).toBe(321)
  expect(reverseInt(7)).toBe(7)
  expect(reverseInt(100)).toBe(1)
})
