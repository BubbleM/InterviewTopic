function formatStr(str) {
  let arr = str.split('-');
  return arr.reverse().join('&');
}

let str = 'abcd-ef-ghi';
console.log(formatStr(str)); // ghi&ef&abcd