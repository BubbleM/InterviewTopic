var info="腾讯拍拍网（www.paipai.com）是腾讯旗下知名电子商务网站。";
info +="拍拍网于2005年9月12日上线发布，";
info +="2006年3月13日宣布正式运营，";
info +="是目前国内第二大电子商务平台。";
info = info.split("，");
for(var i=0; i<info.length; i++)
{
  console.log(info[i]);
}

/*
* 改为数组，再将其通过join()方法改为字符串
* 因为字符串一旦创建，它的值不能改变，要改变某变量保存的字符串，首先得销毁原来的字符串，然后再用新的字符串填充变量
* 因此字符串拼接速度慢，效率低。
* */
let array = [];
let infos;
array.push('腾讯拍拍网（www.paipai.com）是腾讯旗下知名电子商务网站。');
array.push('拍拍网于2005年9月12日上线发布，');
array.push('2006年3月13日宣布正式运营，');
array.push('是目前国内第二大电子商务平台。');
infos = array.join('').split('，');
for(let i = 0, len = infos.length; i < len; i++) {
  console.log(infos[i]);
}
/*
字符串大的话，则拼接时间会长，效率低。
再一个就是优化循环体，避免每次循环都计算一次数组的长度
因此将数组长度付给变量，只在第一次循环时计算。*/
