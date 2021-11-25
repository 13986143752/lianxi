const http = require('http')
const {resolve} = require("url");
const queryString = require('querystring');
const logsUtil = require('../utils/logs')

const httpServe = http.createServer((res, req) => {

    let start = new Date()
    let data = '';

    res.on('data', (chunk) => {
        data += chunk
    })

    res.on('end', () => {
        // 设置请求头类型，text/html类型会解析html标签,application/json设置的返回类型为json集合，charset=utf-8设置编码格式
        req.writeHead(200, {
            'content-type': 'application/json;charset=utf-8'
        })

        debugger
        logsUtil.logInfo(data)

        req.write(JSON.stringify(queryString.parse(data)))
        req.end()
    })
})

httpServe.listen(8089, () => {
    console.log('服务启动在: http://localhost:8089')
})
