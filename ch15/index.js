//Create Web server - http Module
import http from 'http';
import fs from 'fs';

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Text/html'})
    // if(req.url === '/'){
    //     res.end('<h1>Home Page</h1>');
    // }
    // else if(req.url === '/About'){
    //     res.end('<h1>About Page</h1>');
    // }else{
    //     res.end('<h1>404 Page Not Found</h1>');
    // }
    if(req.url === '/'){
        fs.readFile('./public/home.html',(error,data)=>{
            if(error) throw error
            res.end(data);
        });
    }
    else if(req.url === '/About'){
        fs.readFile('./public/about.html',(error,data)=>{
            if(error) throw error
            res.end(data);
        });
    }else{
        res.end('<h1>404 Page Not Found</h1>');
    }
});
const PORT = process.env.PORT || 3000;
const HOST = 'localhost'
server.listen(PORT,HOST,()=>{
    console.log("server runing at http://127.0.0.1:3000");
});
