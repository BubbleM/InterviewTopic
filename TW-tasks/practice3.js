/**
 * Created by bubble on 17-8-10.
 */
function findNum(arr) {

  let tempArr = [];

  arr.forEach(item => {
    if (!tempArr.includes(item)) {
      tempArr.push(item);
    } else {
      let index = tempArr.indexOf(item);
      tempArr.splice(index, 1);
    }
  });

  return tempArr[0];
}

let arr = [1, 2, 3, 2, 3, 4, 5, 5, 4];
console.log(findNum(arr));