const http = require('http')
const {resolve} = require("url");
const queryString = require('querystring');
const logsUtil = require('../utils/logs')

const httpServe = http.createServer((request, response) => {

    console.log(111111111, request.method)
    // console.log(request);
    const url = request.url;
    let data = '';

    console.log(22222222, url)
    // 该方式仅用于post请求，get请求需要另外配置请求处理函数
    request.on('data', function (chunk){
        console.log(chunk)
        data += chunk
    })

    // 这种方式只能用于post请求
    request.on('end', () => {
        // 设置请求头类型，text/html类型会解析html标签,application/json设置的返回类型为json集合，charset=utf-8设置编码格式
        response.writeHead(200, {
            'content-type': 'application/json;charset=utf-8'
        })

        console.log('333333', data)
        // logsUtil.logInfo(1111111)

        response.write(JSON.stringify(queryString.parse(data)))
        response.end()
    })
})

httpServe.on('request', (req, res) => {
    console.log('接收到请求')
})

// httpServe.use(async (ctx, next) => {
//     const start = new Date();					          // 开始时间
//     let intervals;								              // 间隔时间
//     try {
//         await next();
//         intervals = new Date() - start;
//         logsUtil.logRequest(ctx, intervals);  // 记录请求日志
//         logsUtil.logResponse(ctx, intervals);	  //记录响应日志
//     } catch (error) {
//         intervals = new Date() - start;
//         logsUtil.logError(ctx, error, intervals);//记录异常日志
//     }
// })

httpServe.listen(8080, () => {
    console.log('服务启动在: http://localhost:8080')
})
