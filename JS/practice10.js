function withoutRepeat(arr) {
  let str = arr.join(',');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) !== -1) {
      newArr[newArr.length] = arr[i];
    }
    while (str.indexOf(arr[i]) !== -1) {
      str = str.replace(arr[i], ' ');
    }
  }

  return newArr;
}

function withoutRepeat1(arr) {
  return [...new Set(arr)];
}

let arr = [1, 2, 3, 1, 2, 4, 5, 6, 5];
console.log(withoutRepeat(arr));
console.log(withoutRepeat1(arr));