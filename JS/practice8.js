Math.random(); // 返回0~1之间的小数　不包含0和1
Math.floor(Math.random() * 10 + 1); // 返回1到10之间的整数

function rd(n, m) { // 返回n-m之间的数
  let c = m - n + 1;
  return Math.floor(Math.random() * c + n);
}
var n = 5;
var m = 100;
console.log(rd(n, m));

console.log(Math.floor(Math.random() * 100)); // 0 ~ 99 之间的数

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
      result.push(baseArr[index]);
      baseArr[index] = undefined;　/*去除数组中取出的这个数,实现永不重复*/
    } else {
      num += 1;
    }
  }
  return result;
}

console.log(getRandom(5));