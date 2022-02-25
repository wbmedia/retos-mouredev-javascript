// Complejidad O(n)
const bubbleSort = function (array) {
  // Write your code here.

  // declaramos nuestra variable que nos ayudara a verificar si se hizo el cambio
  // de nuestro elemento.
  let swapped = false

  // recorremos el arreglo
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
      swapped = true
    }
  }
  // Usamos la recursividad
  if (swapped) {
    bubbleSort(array)
  }
  return array
}
module.exports = bubbleSort
