window.onload = function () {
  document.body.onclick = function (e) { // DOM0级事件处理程序
    e = window.event ? window.event : e;　// IE中事件对象,是window对象的一个属性
    let target = e.target ? e.target : e.srcElement;　// IE

    alert(target.tagName);
  }
}