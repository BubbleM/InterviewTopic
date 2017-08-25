function getSymNum() {
  let syms = [];
  for(let i = 0; i <= 10000; i++) {
    let stu_i = i.toString();
    let len = stu_i.length;
    let arr_i = stu_i.split('');
    let rev_arr = [];
    for(let j = 0; j < len; j++){
      rev_arr.unshift(arr_i[j]);
    }

    let rev_str = rev_arr.join('');
    if (stu_i === rev_str) {
      syms.push(i);
    }
  }

  return syms;
}
console.log(getSymNum());