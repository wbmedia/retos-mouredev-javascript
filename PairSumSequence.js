/* 
	Calcualar el numero al cuadrado
	Creamos una funcion para recibir un parametro n
  Conplejidad: O(1)
*/
const pairSumSequence = function (n: number) {
  let sum: number = 0;
  for (let i: number = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
    console.log(sum)
  }
  return sum;
};

// sumanos a + b
const pairSum = function (a: any, b: any) {
  return a + b;
};

pairSumSequence(22);
