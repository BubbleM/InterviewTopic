// 按len长度拆分字符串
function splites(str, len) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.substr(i, len));
    i += len - 1;
  }

  return result;
}

function numToChar(num) {
  if (num > 26) num = num % 26;

  return String.fromCharCode(num + 64);
}

// 拆分字符串的所有可能结果
function spliteResult(num) {
  let str = num.toString();
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(splites(str, i + 1));
  }

  return result;
}

function arrToCharCode(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = numToChar(arr[i][j] - 0);
    }
  }

  return arr;
}

function main(num) {
  let result = [];
  let arr = spliteResult(num);
  let codeArr = arrToCharCode(arr);
  codeArr.forEach(item => {
    result.push(item.join(''))
  });

  return result;
}

console.log(main(123) + ' 解码方法的种数：' + main(123).length);