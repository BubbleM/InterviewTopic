function createArr(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

function getRandom(num) {
  let result = [];
  let baseArr = createArr(99); /*1.创建0~99的数组*/
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random()*100); /*每次随机取出一个数*/
    if (baseArr[index]) {
      result.push(baseArr.splice(index, 1));
      // baseArr[index] = undefined;　/*去除数组中取出的这个数,实现永不重复*/
    } else {
      num += 1;
    }
  }
  return result;
}

console.log(getRandom(5));