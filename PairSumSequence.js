/* 
	Calcualar el numero al cuadrado
	Creamos una funcion para recibir un parametro n
  Complejidad: O(n) por que recorre todos los numeros
*/
const pairSumSequence = function (n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1)
  }
  return sum
}

// Helper function
// Complejidad O(1) constante
const pairSum = function (a, b) {
  return a + b
}

module.exports = pairSumSequence
