/**
 * Buffer又称缓冲区
 * 缓存区的出现是因为JS只有字符串数据类型，没有二进制数据类型
 * 但是在处理图像TCP流和文件流时，必须使用二进制数据，所以node定义了一个Buffer类来创建一个专门存放二进制数据的暂存区
 */

// 创建一个Buffer类型数据
const buffer = Buffer.from('12345678')

// alloc方法返回一个指定长度的Buffer实例，若没有设置就是该长度就是0
const buffer1 = Buffer.alloc(8)

// toString()方法有一个入参,为编码格式,不传默认是UTF-8
console.log(buffer.toString())
// hex字符编码格式
console.log(buffer.toString('hex'))
// base64字符1编码格式
console.log(buffer.toString('base64'))

/**
 * node目前支持的字符编码
 *
 * ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
 * utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
 * utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
 * ucs2 - utf16le 的别名。
 * base64 - Base64 编码。
 * latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
 * binary - latin1 的别名。
 * hex - 将每个字节编码为两个十六进制字符。
 */

// 将数据写入缓冲区;write方法的四个参数的含义如下：该方法的返回值是实际写入的长度，如果 buffer 空间不足， 则只会写入部分字符串。
/**
 * @string 需要写入暂存区的数据源，是个字符串类型
 * @offset 该参数表示从第几位开始写入，及开始写入位置的索引，默认为0
 * @length 长度，写入的字节数，默认为string.length，这个长度如果要设定的话，必须小于alloc()方法设定的长度
 * @encoding 字符编码模式，默认是utf-8
 * 有一种情况就是，如果buffer没有足够的空间保存整个字符串，那么就只会写入一部分
 */
let len = buffer1.write('12345677',0,"utf-8");
console.log(len)

// Buffer的实例方法如下:(buf是Buffer实例)

/**
 * @ buf.toJSON()  将 Node Buffer 转换为 JSON 对象
 * @ buf.concat()  合并缓冲区
 */
let buf3 = Buffer.from('123456');
console.log(buf3.toJSON())

let buf4 = Buffer.from('123');
let buf5 = Buffer.from('456');
let buf6 = Buffer.concat([buf4,buf5]);

console.log('合并后', buf6.toString())
console.log('合并后1', buf6.toJSON())


