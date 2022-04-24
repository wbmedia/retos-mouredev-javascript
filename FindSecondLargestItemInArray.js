const secondLargestNumber = function (array) {
  if (array.length <= 0) {
    return -1
  }
  const secondLargestInteger = array.sort(orderArray)[1]
  return secondLargestInteger
}
const orderArray = (a, b) => {
  return b - a
}

module.exports = secondLargestNumber
