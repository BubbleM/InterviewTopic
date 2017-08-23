var result = [];

function map(arr){
  arr.forEach(item => {
    if (item instanceof Array) {
      arguments.callee(item);
    } else {
      result.push(item);
    }
  });
}

let arr = [4,[3,[2,[1]]]];
map(arr);
console.log(result);
