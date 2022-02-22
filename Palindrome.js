// solution 1: isPalindrome
function palindromes(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}
// solution 2: is palindrome
function isPalindrome(str) {
  return str.split('').reverse().join('') === str
}

module.exports = isPalindrome
module.exports = palindromes
