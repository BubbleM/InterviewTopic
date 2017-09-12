/*
var compiled = template('hello <%= user %>');
compiled({'user': 'world'}); // hello world!
*/
function template(tpl) {
  let pattern = /<%([^%>]+)?%>/g;
  let match = pattern.exec(tpl);
  let str = match[1];
  let index = match.index;

  return {
    index: index,
    str: str
  }
}

function compiled(obj, tpl) {
  let result = template(tpl);
  let index = result.index;
  let str = tpl.substring(0, index);
  console.log(result.str);
  console.log(obj.user)
  return `${str} ${result.str}!`;
}

let tpl = 'hello <%= user %>';
let obj = {'user': 'world'};
console.log(compiled(obj, tpl));