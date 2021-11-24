const https = require("https");
https.get('https://www.cnblogs.com/fandx/p/12130367.html', (res) => {
    let str = ''
    res.on('data' , (chunk) => {
        str += chunk;
        console.log(str)
    })
    res.on('end', () => {
        console.log(str)
    })
})
