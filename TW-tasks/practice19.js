let data = {a: 1, b: 2, c: 3, d: 4};
let result = Object.keys(data).filter(x => {
  return data[x] > 2;
})

console.log(result); // [ 'c', 'd' ]
