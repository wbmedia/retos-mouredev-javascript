// Solution 1: reverseString
function revString(str) {
  return str.split('').reduce((reverse, character) => {
    return character + reverse
  }, '')
}
// Solution 2: reverseString
function reverseStr(str) {
  let reverse = ''
  for (let char of str) {
    reverse = char + reverse
  }
  return reverse
}

// Solution 3: reverseString
function revStr(str) {
  return str.split('').reverse().join('')
}
module.exports = revStr
module.exports = reverseStr
module.exports = revString
