/* 
	Calcualar el numero al cuadrado
	Creamos una funcion para recibir un parametro n
  Conplejidad: O(1)
*/
const pairSumSequence = function (n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1)
  }
  return sum
}

// Helper function
const pairSum = function (a, b) {
  return a + b
}

module.exports = pairSumSequence
