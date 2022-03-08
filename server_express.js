import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
let port = process.env.port || 7777;

app.use(express.static('src'));
app.get('/', (request, response)=> {
  response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
  fs.createReadStream(path.join(__dirname, 'public/index.html')).pipe(response);
});

app.listen(port, ()=> {
  console.log('server start...');
});
