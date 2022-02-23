const insertionSort = require('../insertionSort')
test('Insertion Sort Test', () => {
  expect(insertionSort([])).toEqual([])
  expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6])
  expect(insertionSort([51, 12, 4, 6, 11, 3])).toEqual([3, 4, 6, 11, 12, 51])
})
