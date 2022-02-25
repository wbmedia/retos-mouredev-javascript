// Complejidad O(n)
const bubbleSort = function (array) {
  // Write your code here.

  // declaramos nuestra variable que nos ayudara a verificar si se hizo el cambio
  // de nuestro elemento.
  let swapped = false

  // recorremos el arreglo
  for (let i = 0; i < array.length; i++) {
    // verificamos que el elemento sea mayor que el siguiente
    if (array[i] > array[i + 1]) {
      // si es mayor, intercambiamos los elementos
      ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
      // y cambiamos el valor de swapped a true
      swapped = true
    }
  }
  // Usamos la recursividad
  // Si no se hizo el cambio, terminamos la recursividad
  if (swapped) {
    // si se hizo el cambio, volvemos a llamar a la funcion
    bubbleSort(array)
  }
  // retornamos el arreglo
  return array
}
module.exports = bubbleSort
