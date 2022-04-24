const mergeSort = function (numbers) {
  const length = numbers.length
  const middle = Math.floor(length / 2)
  const left = numbers.slice(0, middle)
  const right = numbers.slice(middle)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

const merge = function (left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}
