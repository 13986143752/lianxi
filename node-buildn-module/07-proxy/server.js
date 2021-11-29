const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware')

const serve = http.createServer((req,res) => {
    let url = req.url;
    let urlObj = new URL(url, 'http://localhost:8080');
    let params = urlObj.searchParams;

    res.writeHead(200, {
        'content-type': 'application/json;charset=utf-8',
    })

    if (/^\/api/.test(url)){
        console.log(url)
        const proxy = createProxyMiddleware('/api', {
            target: 'http://192.168.31.239:8082',
            changeOrigin: true,
            pathRewrite: {
                '/api': ''
            }
        })
        proxy(req, res)
    }
})

serve.listen(8080, () => {
    console.log('服务启动于: http://localhost:8080')
})
