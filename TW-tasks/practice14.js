var result = [];

function map(arr){
  arr.forEach(item => {
    if (typeof(item) === 'object') {
      arguments.callee(item);
    } else {
      result.push(item);
    }
  });
}

let arr = [4,[3,[2,[1]]]];
map(arr);
console.log(result);
