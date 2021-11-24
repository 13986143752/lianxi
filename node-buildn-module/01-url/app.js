// 老版本
// const url = require('url');
// const urlObj = url.parse('https://example.org')

// 新版
// 解析网址与老版本中的parse方法功能效果一样
const myURL = new URL('https://example.org');

console.log('111111',myURL)
// 将网址对象还原为地址字符串,与老版本的format方法功能一样
console.log(JSON.stringify(myURL))
