function leftPad(str, len, ch) {
  return ch.repeat(len) + str;
}

console.log(leftPad('hello', 20, '1'));