/**
 * node是单进程单线程，由于v8引擎提供异步回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
 * 基本每个api都支持异步回调
 * 采用观察者模式，没注册一个回调就会生成一个对应的观察者
 *
 * node使用事件驱动模型，当webserver收到请求之后就会注册一个回调然后关闭，继续处理下一个请求，
 * 当这个请求完成，该请求就会被放回队列，当队列到头时，就会返回给用户
 * 这样一种模型高效的原因是因为webserver不需要去等待任何一个读写操作再去处理下一个请求(这就是非阻塞I/O模型或者事件驱动模型)
 * 并且在事件驱动模型中，会生成一个主循环（相当于一个总的监听站，这也是events模块存在的原因）来监听事件，当检测到事件时触发相应回调
 */

// 这里的events是一个类
const events = require('events')

class myEvent extends events {}

const event = new myEvent()

// 创建事件
event.on('play', () => {
    console.log('触发了play')
})

// 另外一种创建事件的方式
event.addListener('play2', () => {
    console.log('触发了play2')
})

// 创建仅执行一次的事件
event.once('playOnce', () => {
    console.log('触发了playOnce')
})

// 触发事件
event.emit('play')
event.emit('play2')
for (let i = 0; i < 2; i++) {
    event.emit('playOnce')
}

