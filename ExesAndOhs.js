function XO(str) {
  return (
    str.split('').reduce((a, b) => {
      if ('x' === b.toLowerCase()) {
        return a + 1
      } else if ('o' === b.toLowerCase()) {
        return a - 1
      } else {
        return a
      }
    }, 0) === 0
  )
}

module.exports = XO

function exes(str) {
  let x = 0
  let o = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      x++
    } else if (str[i].toLowerCase() === 'o') {
      o++
    }
  }
  return x === o
}
module.exports = exes
