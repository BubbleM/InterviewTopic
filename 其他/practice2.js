/*
* 实现function C(a,b,c,d){...}
* 将前两个参数传递给函数A,其余参数传递给函数B
* 即A(a,b)  B(c,d)
* */

function A() {
  console.log(arguments.length);
}

function B() {
  console.log(arguments.length);
}

function C() {
  let str1 = [];
  let str2 = [];
  for (let i = 0; i < arguments.length; i++) {
    if (i < 2) {
      str1.push(arguments[i]);
    }else {
      str2.push(arguments[i]);
    }
  }

  A(...str1);
  B(...str2);
}

C(1,2,3,4,5);