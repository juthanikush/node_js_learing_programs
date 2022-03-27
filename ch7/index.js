//File System -callback API
import * as fs from 'fs';


//Createing Directory - path should be there
// fs.mkdir('D:\\nodejs geekshows\\ch7\\kush',function(error){
//     if(error) throw error;
//     console.log("Directory Created...");
// });

//Createing Directory - path is not required to be there
// fs.mkdir('D:\\nodejs geekshows\\ch7\\test\\demo',{recursive:true},(error) => {
//     if(error) throw error;
//     console.log("Directory Created...");
// });

//Read content of Directory
// fs.readdir('D:\\nodejs geekshows\\ch7\\test',(error,files) => {
//         if(error) throw error;
//         for (const file of files)
//             console.log(file);
//     });

//Remove Directory -Directory should be empty
// fs.rmdir('D:\\nodejs geekshows\\ch7\\test\\demo',(error)=>{
//     if(error) throw error;
//     console.log("Directory Removed...");
// });

//Create and Write File
// fs.writeFile('readme.txt','Hi, how are you?',error=>{
//     if(error) throw error
//     console.log("Files was Created");
// });

//Read File
// fs.readFile('readme.txt',(error,data)=>{
//     if (error) throw error;
//     console.log(data);
// });

// fs.readFile('readme.txt','utf-8',(error,data)=>{
//     if (error) throw error;
//     console.log(data);
// });

//appedn  data into file
// fs.appendFile('readme.txt','hello kush juthani',(error)=>{
//     if(error)throw error;
//     console.log("file was append");
// });

//copy file
// fs.copyFile('readme.txt','info.txt',(error)=>{
//     if(error) throw error;
//     console.log('File was copyed');
// });

//get File information
fs.stat('readme.txt',(error,stats)=>{
    if(error) throw error;
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    
});