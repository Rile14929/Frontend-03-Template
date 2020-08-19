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
            #container{
              display: flex;
              width: 500px;
              height: 300px;
              background-color: rgb(255,255,255);
            }
            #container #flex1 {
              width: 300px;
              height: 100px;
              background-color: rgb(255,0,0);
            }
            #container #flex2 {
              flex: 1;
              height: 300px;
              background-color: rgb(0,255,0);
            }
          </style>
        </head>
        <body>
          <div id="container">
            <div id="flex1">1111</div>
            <div id="flex2">2222</div>
          </div>
        </body>
        </html>
      `
      );
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


// `<html lang=en>
//   <head>
//     <title>Document</title>
//     <style>
//       body div #myid{
//         width: 100px;
//         background-color: #ff5000;
//       }
//       body div img{
//         width: 30px;
//         background-color: #ff1111;
//       }
//       .body.bodyDiv{
//         display: flex;
//         width: 500px;
//         height: 300px;
//         background-color: #000;
//       }
//       #flex1 {
//         width: 200px;
//       }
//       #flex2 {
//         flex: 1;
//       }
//     </style>
//   </head>
//   <body>
//     <div>
//       <img />
//       <img id="myid" />
//     </div>
//     <div class="body bodyDiv">
//       <div id="flex1">1111</div>
//       <div id="flex2">2222</div>
//     </div>
//   </body>
//   </html>
// `

