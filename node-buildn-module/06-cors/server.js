const http = require('http')

const httpServe = http.createServer((req, res) => {
    let url = req.url;
    let urlObj = new URL(url, 'http://localhost:8080');
    let params = urlObj.searchParams;
    res.writeHead(200, {
        'content-type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    })
    // 返回json字符串，前端接收到的就是json对象
    res.write('{"test": "111111"}')
    res.end()
})

httpServe.listen(8080, () => {
    console.log('服务启动于: http://localhost:8080')
})
