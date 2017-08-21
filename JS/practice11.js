Array.prototype.max = function () {
  return Math.max.apply(null, this);
}

let arr = [1,2,3,45];
console.log(arr.max());