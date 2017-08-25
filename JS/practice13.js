function suppleZero(item) {
  return item > 10 ? item : '0' + item;
}

function printDate() {
  let str = '';
  with (new Date()) {
    str += getFullYear() + '年' + suppleZero((getMonth() + 1))
      + '月' + suppleZero(getDate()) + '日' + suppleZero(getHours()) + '时' +
      suppleZero(getMinutes()) + '分' + suppleZero(getSeconds()) + '秒';
  }

  return str;
}

console.log(printDate()); // 2017年08月25日16时25分02秒