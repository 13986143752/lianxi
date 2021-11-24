
//node提供两个写入文件的接口,writeFile(异步)和writeFileSync(同步),并且两个方法不能同时使用,且会覆盖文件的原有内容
const fs = require('fs');

fs.writeFile('./log.txt', 'hello1111111111', () => {
    console.log('文件写入成功')
})

fs.writeFile('./test/test.txt', 'hello', () => {  //异步写入文件，需要回调
    console.log('文件写入成功')
})

fs.writeFileSync('log.txt', 'world666')
