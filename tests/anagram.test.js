const { expect } = require('@jest/globals')
const Anagram = require('../Anagram')
const isAnagram = require('../Anagram')

test('strings are Anagrams', () => {
  expect(Anagram('listen', 'silent')).toBe(true)
  expect(Anagram('cab', 'bacs')).toBe(false)
  expect(isAnagram('listen', 'silent')).toBe(true)
})
