/**
 * Created by bubble on 17-8-10.
 */

function divideBy3(num) {
  let count = 0;
  while (num >= 3) {
    count++;
    num -= 3;
  }
  return count;
}

function add(x, y)
{
  while (x) {
    let t = (x & y) << 1;
    y ^= x;
    x = t;
  }
  return y;
}

function divideby3 (num)
{
  let sum = 0;
  while (num > 3) {
    sum = add(num >> 2, sum);
    num = add(num >> 2, num & 3);
  }
  if (num == 3)
    sum = add(sum, 1);
  return sum;
}
//
// console.log(divideby3(11));

console.log(divideBy3(2));



