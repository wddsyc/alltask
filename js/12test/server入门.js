var http = require('http')
var server = http.createServer(function(req,res){
    res.write(`hellow wddsyc`)
    res.end()
})
server.listen(8080)