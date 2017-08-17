function toSquare(arr) {
  return arr.map(item => Math.pow(item, 2));
}

let arr = [5, 3, 7, 1];
console.log(toSquare(arr));