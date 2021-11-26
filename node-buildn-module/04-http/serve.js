
const http = require('http')
const https = require('https')
const qs =  require('querystring')
const { dealGetReq } = require('../utils/dealGetReq')

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
    // let data = dealGetReq(req.url)

    // get请求处理入参问题
    let obj = new URL('http://localhost:8080' + req.url).searchParams
    console.log('00000', obj.get('userName'))
    res.writeHead(200, {
        "content-type": "application/json;charset=utf-8"
    });
    // console.log('1111',data)
    res.write('2222222');
    res.end()
}

// post请求
function httpPost(req, res){
    let data = '';
    // 这样解出来的入参是一个json字符串
    req.on('data', (chunk) => {
        data += chunk
    })

    req.on('end', () => {
        res.writeHead(200, {
            "content-type": "application/json;charset=utf-8"
        });
        let sendData = JSON.parse(data)
        console.log(sendData, typeof sendData)
        res.write(data);
        res.end()
    })
}
