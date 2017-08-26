function fizzBuzz(num) {
  let result = [];
  if (num % 3 === 0) {
    result.push('fizz');
  }
  if (num % 5 === 0) {
    result.push('buzz');
  }

  return result.join(' ');
}

function printFizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      console.log(i + ':' + fizzBuzz(i));
  }
}

printFizzBuzz(15);