const bubbleSort = require('../bubbleSort')

test('bubbleSort test', () => {
  expect(bubbleSort([9, 5, 10, 6, 7, 8, 3, 4, 1, 2])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ])
})
