const isUnique = require('../isUnique')

test('is unique char at the string', () => {
  expect(isUnique('abc')).toBe(true)
  expect(isUnique('abca')).toBe(false)
})
