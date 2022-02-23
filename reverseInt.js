// Solution: 1 reverse a integers
function revInteger(n) {
  let reverseInteger = n.toString().split('').reverse().join('')
  if (n < 0) {
    return -parseInt(reverseInteger)
  }
  return reverseInteger
}

// solution: 2 reverse a integers
function revInt(n) {
  let reverse = n.toString().split('').reverse().join('')
  if (n < 0) {
    return parseInt(reverse) * -1
  }
  return parseInt(reverse)
}
module.exports = revInteger
module.exports = revInt
