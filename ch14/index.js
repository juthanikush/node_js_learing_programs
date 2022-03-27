//Create Web server - http Module
import http from 'http';


const server=http.createServer((req,res)=>{
//request
    // if(req.url != '/favicon.ico'){
    //     console.log(req.url);
    // }
    // console.log(req.method);
//response
    // res.statusCode=202;
    // res.statusMessage="Done";
    // res.setHeader('Content-Type','text/plain');

    res.writeHead(202,"done",{'Content-Type':'text/plain'})
    res.end('Response server 1');
});
const PORT = process.env.PORT || 3000;
const HOST = 'localhost'
server.listen(PORT,HOST,()=>{
    console.log("server runing at http://127.0.0.1:3000");
});
