function intersect(arr1, arr2){
  let result = [];
  arr1.forEach(item => {
    if (arr2.includes(item)) {
      let index = arr2.indexOf(item);
      result.push(item);
      arr2[index] = '';
    }
  });

  return result;
}
let nums1 = [1, 2, 2, 1, 2];
let nums2 = [2, 2];
console.log(intersect(nums1, nums2));
