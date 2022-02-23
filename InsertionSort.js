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
