const http = require('http')

const serve = http.createServer((req, res) => {
    let url = req.url;
    let urlObj = new URL(url, 'http:localhost:8080');
    console.log(urlObj)
    switch (urlObj.pathname) {
        case '/api/data':
            res.write(`${urlObj.searchParams.get('action')}(${urlObj.searchParams.get('id')})`);
            break
        default:
            res.write('the page is not found')
    }
    res.end()
})

serve.listen(8080, () => {
    console.log('服务启动于: http://localhost:8080')
})
