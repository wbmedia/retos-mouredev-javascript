
const fizzBuzz = function (n: number) {
  for (let i = 1; i < n; i++) {
    if (i % 15 == 0) {
      console.log('fizzBuz');
    } else if (i % 3 == 0) {
      console.log('fizz');
    } else if (i % 5 == 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }

  return n;
};

fizzBuzz(99);
fizzBuzz(100);
fizzBuzz(1);