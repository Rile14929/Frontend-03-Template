let http = require('http')
let fs = require('fs')

let unzipper = require('unzipper')

http.createServer(function(request, response){

  // let outFile = fs.createWriteStream("./tmp.zip")
  // request.pipe(outFile)

  request.pipe(unzipper.Extract({ path: './public/' }))

  // request.on('data', chunk => {
  //   outFile.write(chunk)
  // })
  // request.on('end', () => {
  //   outFile.end()
  //   response.end('success')
  // })
}).listen(8082)