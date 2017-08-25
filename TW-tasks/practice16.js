function removeTargetToLast(arr, target) {
  let index = arr.indexOf(target);
  let removeItem = arr.splice(index, 1)[0];
  arr.push(removeItem);

  return arr;
}

function findTargetCount(arr, target) {
  let count = 0;
  arr.forEach(item => {
    if (item === target) {
      count++;
    }
  });

  return count;
}

function main() {
  let nums = [0, 1, 0, 3, 12];
  let target = 0;
  let count = findTargetCount(nums, target);
  for (let i = 0; i < count; i++) {
    nums = removeTargetToLast(nums, target);
  }
  return nums;
}

main();