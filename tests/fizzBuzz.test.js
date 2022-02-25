const fizzBuzz = require('../fizzBuzz')
test('fizzBuzz Test', () => {
  expect(fizzBuzz(15)).toBe('fizzBuzz')
  expect(fizzBuzz(3)).toBe('fizz')
  expect(fizzBuzz(5)).toBe('buzz')
  expect(fizzBuzz(1)).toBe(1)
})
