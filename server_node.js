const http = require('http');
const path = require('path');
let fs = require('fs');

const app = http.createServer((request, response)=> {
  const _url = request.url;
  const fullUrl = new URL('http://localhost:7777' + _url);
  const pathName = fullUrl.pathname;
  const imgRegex = /[.png|.jpeg|.jpg|.gif]/gi;
  
  if(pathName==='/') {
    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    fs.createReadStream(path.join(__dirname, 'static/index.html')).pipe(response);
  }
  if(pathName.includes('.js')) {
    fs.createReadStream(path.join(__dirname, pathName)).pipe(response);
  }
  // if(imgRegex.test(pathName)) {
  //   fs.createReadStream(path.join(__dirname, pathName)).pipe(response);
  // }
});

app.listen(7777, ()=> {
  console.log('node server start.');
});