/**
 * Created by bubble on 17-8-13.
 */
function findMiddleNum(arr) {
  let middleNum;
  if (arr.length % 2 === 0) {
    middleNum = (arr[parseInt(arr.length / 2)] + arr[parseInt(arr.length / 2) -  1]) / 2;
  } else {
    middleNum =  arr[parseInt(arr.length / 2)];
  }
  return middleNum;
}

function printMiddleNum(arr) {
  arr.sort((a, b) => {
    return a - b;
  })
  console.log(findMiddleNum(arr));
}

let arr = [1,3,2,5];
printMiddleNum(arr);