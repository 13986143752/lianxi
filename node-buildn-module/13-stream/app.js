const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '/log.txt')
const filePath1 = path.join(__dirname, '/logs2.txt')
// 创建可读流  相当于一个容器
let readStream = fs.createReadStream(filePath);

// 创建文件
fs.writeFile(filePath1, '', (err) => {
    console.log('创建文件成功')

    // 创建可写流 相当于另一个容器
    let writeStream = fs.createWriteStream(filePath1);

    // 在可读流和可写流之间建立数据传输管道,用以传输数据（可读流主动创建）
    readStream.pipe(writeStream)

})
