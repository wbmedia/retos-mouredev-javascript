const validParentheses = require('../validParentheses')

test('valid parentheses', () => {
  expect(validParentheses('()')).toBe(true)
  expect(validParentheses('(')).toBe(false)
  expect(validParentheses(')')).toBe(false)
  expect(validParentheses('())')).toBe(false)
  expect(validParentheses('')).toBe(false)
})
