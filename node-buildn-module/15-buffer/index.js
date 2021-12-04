/**
 * Buffer又称缓冲区
 * 缓存区的出现是因为JS只有字符串数据类型，没有二进制数据类型
 * 但是在处理图像TCP流和文件流时，必须使用二进制数据，所以node定义了一个Buffer类来创建一个专门存放二进制数据的暂存区
 */

// 创建一个Buffer类型数据
const buffer = Buffer.from('12345678')

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
