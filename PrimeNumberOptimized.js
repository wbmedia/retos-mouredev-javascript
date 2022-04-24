const isPrime = function (num) {
  let prime = true;
  for (let i = 2; i <= num / 2 && prime; i++) {
    if (num % i === 0) prime = false;
  }
  return prime;
}

module.exports = isPrimer;
