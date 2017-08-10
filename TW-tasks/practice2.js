function Fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return arguments.callee(num - 1) + arguments.callee(num - 2);
  }
}
console.log(Fibonacci(8));