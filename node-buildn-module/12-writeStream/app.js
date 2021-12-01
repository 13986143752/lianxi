const fs = require('fs')
const path = require('path')

let data = '1111';
const filePath = path.join(__dirname, '/log.txt')

// 追加式向文件写入数据
// fs.appendFile(filePath, data, () => {
//     console.log('写入完成')
// })
// 创建可写流,后面的配置项是用于指定写入流的位置，避免覆盖原有数据
let writeStream = fs.createWriteStream(filePath, {
    flags: 'r+',
    start: 8,
})

// console.log(writeStream)
// 使用utf-8编码写入数据
writeStream.write(data, 'utf8')

// 标记文件末尾
writeStream.end()

// 执行处理程序
writeStream.on('finish', () => {
    console.log('写入完成')
})

writeStream.on('error', (err) => {
    console.log(err)
})
