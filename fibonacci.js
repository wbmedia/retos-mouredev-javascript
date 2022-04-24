// Solucion: 1
function fibo(n) {
  if (n === 2 || n === 1) {
    return 1
  } else if (n <= 0) {
    return 0
  }
  return fibo(n - 1) + fibo(n - 2)
}

// Solucion: 2
const fibonacci = (n) => {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
// Solucion: 3

const fnacci = function (n) {
  const sequence = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }
  return sequence[n]
}

module.exports = fibonacci
module.exports = fibo
module.exports = fnacci
