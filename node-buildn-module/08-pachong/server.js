const http = require('http')
const https = require('https')
const {logInfo} = require("../utils/logs");
const cheerio = require('cheerio')

function filterData(data){
    // console.log(data);
    const $ = cheerio.load(data);
    console.log(11111111)
    $('.foot-ft').each((index, el) => {
        console.log(index)
        console.log($(el).html())
    })
}

const serve = http.createServer((req,res) => {
    let data = '';
    https.get('https://www.pinduoduo.com/', (result) => {
        result.on('data', (chunk => {
            data += chunk;
        }))
        result.on('end', () => {
            filterData(data)
        })
    })
    // 除去以上发送请求的方式,常用的还有以下两种

    // request   需要执行npm i request --S 下载
    // 用法：
    // request('https://jsonplaceholder.typicode.com/todos/1', { json: true }, (err, res, body) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(body.id);
    //     console.log(body.title);
    // });

    // axios  同样需要执行npm i axios -D下载安装
    // 用法：
    // get请求
    // axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(res => {
    //         console.log(res.data.id);
    //         console.log(res.data.title);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // post请求
    // axios.post('',params).then(res => console.log(res)).cath((err) => {})

})

serve.listen(8080, () => {
    console.log('服务启动于: http://localhost:8080')
})
