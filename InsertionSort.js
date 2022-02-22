const array = [5, 2, 4, 6, 1, 3]
const insertionSort = function(array:number[]) {
  // calculamos la longitud de arraglo
  let n = array.length;
  // comensamos desde la segunda posicion de nuestro arreglo
  for(let i = 1; i < n; i++) {
    // guardo en una variable mi poscisión actual del arreglo
    let current = array[i]
    // creo una variable donde me regreso
    let j  = i - 1
    console.log(j > -1, current > array[j])
    console.log(current, j, array[j])
    while((j > -1) && (current < array[j])) {
      array[j + 1] = array[j]
      j--
    }
    array[j+ 1] = current
  }
  return array
} 


insertionSort(array)