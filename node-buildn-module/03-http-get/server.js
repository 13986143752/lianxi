const http = require('http')
const {resolve} = require("url");

const httpServe = http.createServer((res, req) => {
    req.write('88888888888 99999999999999')
    req.end()
})

httpServe.listen(8089, () => {
    console.log('服务启动在: http://localhost:8089')
})
