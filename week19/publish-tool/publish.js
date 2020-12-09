let http = require("http")
let fs = require('fs')
let archiver = require('archiver')

fs.stat('./sample.html', (err, stats) => {
  let request = http.request({
    hostname: '127.0.0.1',
    post: 8082,
    method: "POST",
    headers: {
      'Content-Type': 'application/octet-stream',
      // 'Content-Length': stats.size
    }
  }, response => {})
  
  let file = fs.createReadStream("./sample.html")
  
  file.pipe(request)
  
  file.on('end', () => request.end())
})

const archive = archiver('zip', {
  zlib: { level: 9 }
})

archive.directory('./sample/', false)

archive.finalize()

archive.pipe(request)



// file.on('data', chunk => {
//   console.log(chunk.toString())
//   request.write(chunk)
// })

// file.on('end', chunk => {
//   console.log('read finished')
//   request.end(chunk)
// })