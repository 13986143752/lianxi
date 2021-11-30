// EventEmitter是一个类
const EventEmitter = require('events')
const {val} = require("cheerio/lib/api/attributes");

// 创建子类并继承
class myEventEmitter extends EventEmitter {}

const event = new myEventEmitter()

// 绑定事件
event.on('play', (value) => {
    console.log(value)
})

// 仅触发一次
event.once('play2', (val) => {
    console.log(val)
})

// 关闭某一事件监听
event.off('play', () => {})

// 添加事件监听
event.addListener('play3', () => {})

// 触发事件
event.emit('play', 'move')
