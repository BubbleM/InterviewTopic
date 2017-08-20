function find(collection, ch) {
  return collection.find(item => item.key === ch);
}

function formatArray(strArr) {
  let result = [];
  for (let ch of strArr) {
    let item = find(result, ch);
    if (item) {
      item.count++;
    } else {
      result.push({key: ch, count: 1});
    }
  }

  return result;
}

function compare(property) {
  return function (a, b) {
    let value1 = a[property];
    let value2 = b[property];

    return value2 - value1;
  }
}

function countChar(str) {
  let result = {};
  let strArr = str.split('');
  let formatArr = formatArray(strArr);
  formatArr.sort(compare('count'));
  formatArr.forEach(item => {
    if (item.count === formatArr[0].count) {
      result[item.key] = item.count;
    }
  });

  return result;
}

let str = 'aaaaabbdbdbb';
console.log(countChar(str));
