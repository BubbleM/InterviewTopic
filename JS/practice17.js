/*匹配手机号*/
let pattern = /^13[0-9]{1}[0-9]{8}|^15[0-9]{1}[0-9]{8}/;
console.log(pattern.test('13229080980')); // true

/*验证下面数字 1,2,3,4,5,6,7,8,9,10,11,12*/
let pattern1 = /^(1[0-2],|[0-9],)*(1[0-2]|[0-9])/;
console.log(pattern1.test('1,2,3,4,5,6,7,8,9,10,11,12'));

/*用正则表达式去掉重复的字符串 只保留其中的一个*/
let str = 'aaadcccdddd';
str = str.replace(/(.)\1+/g, '$1');
console.log(str) // adcd

/*中文*/
let pattern2 = /^[\u4e00-\u9fa5]{0,}$/

