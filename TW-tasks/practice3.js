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

let arr = [1, 4, 3, 4, 2, 2, 3];
console.log(findNum(arr));