function findItemIndex(arr, num) {
  let result = [];
  for (let [index, item] of arr.entries()) {
    if (item === num) result.push(index);
  }

  return result;
}

let arr = [1, 3, 7, 1, 4];
console.log(findItemIndex(arr, 1));