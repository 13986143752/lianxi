const fs = require('fs');
const patch = require('path')

fs.mkdir('log', (err) => {
    if (err){
        console.log(err)
    }else {
        console.log('创建文件夹成功')
    }
})

let filename = patch.join(__dirname,'./tmp/a/apple')
fs.mkdir(filename, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('创建成功')
});


// path使用

// path.json是降多个参数字符串合并成一个路径字符串
// path.json(__dirname, '/test')   合成的路径就是程序执行路径(E:/node)+‘/test’   E:/node/test
// path.join(__dirname,'/a','/b','..')   路径开头的/不会影响拼接，..代表上一级文件，拼接出来的结果是： E:/node/a
// path.join(__dirname,'a',{},'b')    而且path.join()还会帮我们做路径字符串的校验，当字符串不合法时，会抛出错误：Path must be a string.

// path.resolve()方法
// path.resolve()方法是以程序为根目录，作为起点，根据参数解析出一个绝对路径
// 以应用程序为根目录
// 普通字符串代表子目录
// '/'代表根目录

// 获取当前应用程序的绝对路径
// console.log(patch.resolve())

// path.resolve('a','/c')  E:/c  ,因为/斜杠代表根目录，所以得到的就是E:/c 所以一般拼接的时候需要小心点使用/斜杠
// path.resolve(__dirname,'img/so')  E:\zf\webpack\1\src\img\so   这个就是将文件路径拼接，并不管这个路径是否真实存在。
