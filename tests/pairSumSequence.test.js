const pairSum = require('../pairSumSequence')
test('pair Sum Sequence', () => {
  expect(pairSum(22)).toBe(484)
  expect(pairSum(1)).toBe(1)
  expect(pairSum(7)).toBe(49)
  expect(pairSum(0)).toBe(0)
  expect(pairSum(-0)).toBe(0)
})
