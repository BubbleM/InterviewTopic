// http://www.jianshu.com/?username=123
// winSearch = window.location.search = "?username=123&pwd=123";

function getQuery(name) {
  let winSearch = "?username=bubble&pwd=123";
  let reg = new RegExp('(^|&)' + name + "=([^&]*)(&|$)")
  let r = winSearch.substr(1).match(reg);
  if (r !== null) {
    return unescape(r[2]);
  } else {
    return null;
  }
}

console.log(getQuery("pwd"))