// Sumar el numero entero n veces
// parametro de entrada 10
// Ejemplo #1: 1 + 2 + 3 + 4 + 5 + 7 + 8 + 9 + 10
// valor de salida 55
const sum = function(n:number) {
// verificamos que el elemeto de entrada no sea menor a 0
  if(n <= 0) {
    // si el valor es 0 o menor retornamos 0
    return 0
  }
  // usamos la recursividad para ir sumando los elementos
  return n + sum(n-1)
}
sum(10)