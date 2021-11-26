const http = require('http')
const https = require('https')
const qs =  require('querystring')

const serve = http.createServer((req, res) => {
    let method = req.method.toLowerCase()
    if (method === 'get'){
        httpGet(req, res)
    }else if (method === 'post'){
        httpPost(req, res)
    }
})

serve.listen(8080, () => {
    console.log('服务器启动：http://localhost:8080')
})

// get请求
function httpGet(req, res){
    let url = req.url.slice(1);
    res.writeHead(200, {
        "content-type": "application/json;charset=utf-8"
    });
    res.write('222222222');
    res.end()
}

// post请求
function httpPost(req, res){
    let data = '';
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', () => {
        res.writeHead(200, {
            "content-type": "application/json;charset=utf-8"
        });
        res.write(qs.parse(data));
        res.end()
    })
}
