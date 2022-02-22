const array = [7, 2, 4, 8, 3];
const secondLargestNumber = function (array: number[]) {
  if (array.length <= 0) {
    return -1;
  }
  const secondLargestInteger = array.sort(orderArray)[1];
  return secondLargestInteger;
};
const orderArray = (a: number, b: number) => {
  return b - a;
};

secondLargestNumber(array);
