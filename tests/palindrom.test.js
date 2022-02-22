const { expect } = require('@jest/globals')
const Palindrome = require('../Palindrome')
test('string is palindrome', () => {
  expect(Palindrome('abba')).toBe(true)
  expect(Palindrome('abba')).toBe(true)
})
