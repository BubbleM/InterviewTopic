function findMiddleNum(arr) {
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 -  1]) / 2;
  }

  return arr[parseInt(arr.length / 2)];
}

function printMiddleNum(arr) {
  arr.sort((a, b) => a - b);
  console.log(findMiddleNum(arr));
}

let arr = [1, 3, 2, 5];
printMiddleNum(arr);