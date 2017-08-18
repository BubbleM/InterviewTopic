function toSquare(arr) {
  let result = arr.map(item => Math.pow(item, 2));
  return result;
}

let arr = [5, 3, 7, 1];
console.log(toSquare(arr));