/**
 * @data queryString模块主要用于解析地址入参为键值集合的
 * @param req
 */

const queryStr = require('querystring');
let url = 'name=lxc&age=20&height=&weight=120'  //网址标准入参格式
console.log(queryStr.parse(url))

let params = queryStr.parse(url)

// stringify方法接收三个参数，第一个是我们需要转换的键值集合，第二个是键值对组成之间的间隔符号，默认是&,第三个是键和值之间的分割符号
let paramsStr = queryStr.stringify(params, '?', ',')
console.log(paramsStr)

// 同时该模块还可以对传入的字符串做编码和解码

// 编码
let codeStr = queryStr.escape('name=lxc&age=20&height=&weight=120');
console.log(codeStr)

// 解码
let newCodeStr = queryStr.unescape(codeStr)
console.log(newCodeStr)


// 注意：
// queryStr.encode()是queryStr.stringify()的别名，功能一样，都是序列化json数据；
// querystring.decode() 函数是 querystring.parse() 的别名。可以将序列字符串转换为json集合
