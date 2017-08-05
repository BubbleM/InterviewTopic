/*
 * 判断当前标签是否存在于数组中
 * [{
 *   TagName: html,
 *   count: 1
 * }]
 * */
function tagInArr(tag, arr) {
  var result = false;
  for (item of arr) {
    if (item.tagName === tag) return item;
  }
  return null;
}


/*
 * 遍历页面中所有标签,将其转换为对象
 * [{
 *   TagName: html,
 *   count: 1
 * }]
 * */
function IteratorTag(allTags) {
  var tagArr = [];
  for (var item of allTags) {
    let findTag = tagInArr(item.nodeName, tagArr);
    if (!findTag) {
      let obj = {tagName: item.nodeName, count: 1};
      tagArr.push(obj);
    } else {
      findTag.count++;
    }
  }
  return tagArr;
}


function getMaxNum(tagArr) {
  let max = tagArr[0];
  for (var item of tagArr) {
    if (item.count > max.count) max = item;
  }
  return max;
}

let allTags = IteratorTag(document.all); // 获取页面中所有标签 返回NamedNodeMap集合对象
console.log(getMaxNum(allTags)); // Object {tagName: "SPAN", count: 9}
