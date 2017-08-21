function leftTrim(str) {
  return str.replace(/^\s*/g, "");
}

let str = '  this is ah';
console.log(leftTrim(str)); //this is ah
