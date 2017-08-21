function revStr(str) {
  let tmpStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    tmpStr += str.charAt(i);
  }
  return tmpStr;
}
let str = "abcde";
console.log(revStr(str));