function removeNumToLast(arr, target) {
  let count = 0;
  arr.find((value, index) => {
    if (value === target) {
      count++;
      arr.splice(index, 1);
    }
  });
  let removeArr = new Array(count).fill(target);
  
  return arr.concat(removeArr);
}

let nums = [0, 1, 0, 3, 12];
let target = 0;
console.log(removeNumToLast(nums, target));