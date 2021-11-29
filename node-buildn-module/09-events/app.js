// EventEmitter是一个类
const EventEmitter = require('events')

// 创建子类并继承
class myEventEmitter extends EventEmitter {}

const event = new myEventEmitter()

// 绑定事件
event.on('play', (value) => {
    console.log(value)
})

// 触发事件
event.emit('play', 'move')
