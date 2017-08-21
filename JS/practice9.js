function findNullofNum(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

let array1 = [1, 8, 3, 4, 5, 6, 7];
let array2 = [2, 3, 4, 5, 6];
console.log(findNullofNum(array1, array2)); // [ 1, 8, 7 ]
