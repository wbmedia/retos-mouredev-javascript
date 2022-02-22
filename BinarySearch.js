const binarySearch = function (array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
const array = [4, 1, 6, 77, 3, 9, 0, 1, 33, 8, 7];
binarySearch(array, 33);
