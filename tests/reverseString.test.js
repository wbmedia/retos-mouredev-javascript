const { expect } = require('@jest/globals')
const reversString = require('../reverseString')
const revStr = require('../reverseString')
const revString = require('../reverseString')
test('reverse string', function () {
  expect(reversString('abc')).toBe('cba')
  expect(revStr('hello')).toBe('olleh')
  expect(revStr('hello')).toBe('olleh')
  expect(revString('jose')).toBe('esoj')
})
