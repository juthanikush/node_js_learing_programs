//Create Web server - http Module
import http from 'http';

// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/plain');
//     res.end('Response server');
// }).listen(3000,'localhost',()=>{
//     console.log("server runing at http://127.0.0.1:3000");
// });


const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.end('Response server 1');
});
const PORT = process.env.PORT || 3000;
const HOST = 'localhost'
server.listen(PORT,HOST,()=>{
    console.log("server runing at http://127.0.0.1:3000");
});
