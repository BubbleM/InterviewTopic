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

function formatArr(nums, target) {
  let count = findTargetCount(nums, target);
  for (let i = 0; i < count; i++) {
    nums = removeTargetToLast(nums, target);
  }
  return nums;
}

let nums = [0, 1, 0, 3, 12];
let target = 0;
console.log(formatArr(nums, target));


/*
我最近两天经常遇到一个问题，场景是这样的：
  我需要不断的添加数据，所以要将这些数据保存在一个全局变量中。
  就像刚才的nums。我需要多次对num进行操作，所以我创建了一个main()方法将构建一个作用域。
  但是在实际操作中，我其实*/
