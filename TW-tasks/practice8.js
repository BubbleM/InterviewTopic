function repeatItem(arr) {
  let noRepeatItem = [];
  let result = [];
  arr.forEach(item => {
    if (!noRepeatItem.includes(item)) {
      noRepeatItem.push(item);
    } else {
      result.push(item);
    }
  });

  return result;
}
let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log(repeatItem(arr));
