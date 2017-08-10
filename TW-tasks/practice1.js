/**
 * Created by bubble on 17-8-8.
 */
function integerToPrime(num) {
  let primeArr = [];
  for (let i = 2; i <= num; i++) {
    while (i !== num) {
      if (num % i === 0) {
        primeArr.push(i);
        num = num / i;
      } else {
        break;
      }
    }
  }
  primeArr.push(num);
  return primeArr;
}

function printPrime(num) {
  let primeArr = integerToPrime(num);
  let str = num + '=' + primeArr.join('');
  console.log(str);
}

printPrime(90);