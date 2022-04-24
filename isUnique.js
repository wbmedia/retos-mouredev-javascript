const isUnique = (str) => {
  let checker = 0
  for (let i of str) {
    let value = str.charAt(i) - 'a'
    if ((checker & (1 << value)) > 0) {
      return false
    }
    checker |= 1 << value
  }
  return true
}
module.exports = isUnique
