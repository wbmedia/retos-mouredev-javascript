const fibonacci = require('../fibonacci')

test('Fibonacci Algorithm', () => {
  expect(fibonacci(1)).toBe(1)
  expect(fibonacci(2)).toBe(1)
  expect(fibonacci(4)).toBe(3)
  expect(fibonacci(10)).toBe(55)
})
