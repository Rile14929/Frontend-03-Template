const http = require('http');

http.createServer((request, response) => {
  let body = [];

  request.on('error', (err) => {
    console.log(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    // body = Buffer.concat(body).toString();
    body = body.join('')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    // response.end(' my name 12\n')
    response.end(
      `<html lang=en>
          <head>
            <title>Document</title>
            <style>
              body div #myid{
                width: 100px;
                background-color: #ff5000;
              }
              body div img{
                width: 30px;
                background-color: #ff1111;
              }
              .body.bodyDiv{
                width: 100px;
                background-color: #000;
              }
            </style>
          </head>
          <body>
            <div>
              <img />
              <img id="myid" />
            </div>
            <div class="body bodyDiv">
              111
            </div>
          </body>
          </html>
        `);
  });
}).listen(8088);

console.log('server started');

// `<html lang=en>
//   <head>
//     <title>Document</title>
//     <style>
//       .body.bodyDiv{
//         width: 30px;
//         background-color: #ff1111;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="body bodyDiv">
//       <img />
//       <img id="myid" />
//     </div>
//   </body>
//   </html>
// `