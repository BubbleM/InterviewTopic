/**
 * Created by bubble on 17-8-10.
 */
function findNum(arr) {

  let tempArr = [];
  let result;

  arr.forEach(item => {
    if (!tempArr.includes(item)) {
      tempArr.push(item);
    } else {
      result = item;
    }
  });

  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3];
console.log(findNum(arr));