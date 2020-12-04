let http = require('http')
let fs = require('fs')

http.createServer(function(request, response){

  let outFile = fs.createWriteStream("./index.html")

  request.on('data', chunk => {
    outFile.write(chunk)
  })
  request.on('end', () => {
    outFile.end()
    response.end('success')
  })
}).listen(8082)