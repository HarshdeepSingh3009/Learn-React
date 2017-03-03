

/*/*import https from 'https';

https.get('https://www.lynda.com', res=>{
  console.log('response status code: ', res.statusCode);

  /*res.on('data', chunk => {
    console.log(chunk.toString());
  });*/
//});*/

//import http from 'http';

/*const server = http.createServer((req,res)=>{
  res.write("Hello Http!\n");
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});*/

//server.listen(8080);
/*server.on('request',(req,res)=>{
  res.write("Hello Http!\n");
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});*/
//import fs from 'fs';
/*server.get('/about.html',(req,res)=>{
  //res.send('The about page');
  fs.readFile('./public/about.html', (err,data)=>{
    res.send(data.toString());
  });
});*/

import config from'./config';
import express from 'express';
const server = express();
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from  './serverRender';
import bodyParser from 'body-parser';

server.use(bodyParser.json())
server.use(sassMiddleware({
  src:path.join(__dirname,'sass'),
  dest:path.join(__dirname,'public')
}));

server.set('view engine', 'ejs');
server.get(['/','/contest/:contestId'],(req,res)=>{
serverRender(req.params.contestId)
  .then(({initialMarkup, initialData}) => {
     res.render('index',{
    initialMarkup,
    initialData
    });
})
.catch(console.error)
});

/*serverRender()
  .then(content => {
     res.render('index',{
    content: content
  });
})
.catch(console.error)*/

server.use('/api', apiRouter);
server.use(express.static('public')); // called as middleware


server.listen(config.port,config.host,()=>{
console.info('Express listening on port ', config.port);
});