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
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(
          `<html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
              body div #myid {
                width: 100px;
                background-color: #ff5000;
              }
              body div img {
                width: 30px;
                background-color: #ff1111;
              }
            </style>
          </head>
          <body>
            <div>
              <img id="myid"/>
              <img />
            </div>
          </body>
          </html>
        `);
    });
}).listen(8088);

console.log('server started');