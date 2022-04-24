// Solution 1
// O(n^2)
const insertSort = function (array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i]
    let j
    for (j = i - 1; array[j] > numberToInsert && j >= 0; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = numberToInsert
  }
  return array
}

// Solution 2
// O(n^2)
const insertionSort = function (array) {
  let n = array.length

  for (let i = 1; i < n; i++) {
    let current = array[i]
    let j = i - 1
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = current
  }
  return array
}

module.exports = insertionSort
module.exports = insertSort
