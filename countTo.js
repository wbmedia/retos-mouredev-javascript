// Ejemplo de la recursivdad
function countTo(max, current, list) {
  if (current > max) return
  console.log(current)
  countTo(max, current + 1)
}
const count = countTo(5, 1, [])

module.exports = countTo
