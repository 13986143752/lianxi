const fs = require('fs');
const path = require('path')
let data = ''

const filePath = path.join(__dirname,'/log.txt')

// readFile读取文件内容
fs.readFile(filePath, (err, data) => {
    if (err){
        console.log(err)
    }else {
        console.log(data.toString())
    }
})

// 创建可读流读取文件内容

// 创建可读流
let readerStream = fs.createReadStream(filePath)

// 设置编码格式
readerStream.setEncoding('utf-8')

// 读取流
readerStream.on('data', (chunk) => {
    data += chunk
})

// 读取完毕
readerStream.on('end', () => {
    console.log(data)
})

// 读取错误
readerStream.on('error', (err) => {
    console.log(err)
})
