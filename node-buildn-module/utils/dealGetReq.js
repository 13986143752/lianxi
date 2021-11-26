const qs =  require('querystring')
const url = require('url')

function dealGetReq(url){
    console.log(new url(url))
    return  url.parse(url)
}

module.exports = {
    dealGetReq
}

// exports.dealGetReq = dealGetReq
