//File System -Synchronous API
import * as fs from 'fs';


//Createing Directory - path should be there
//fs.mkdirSync('D:\\nodejs geekshows\\ch8\\kush');

//Createing Directory - path is not required to be there
//fs.mkdirSync('D:\\nodejs geekshows\\ch8\\test\\demo',{recursive:true});

//Read content of Directory
// const files=fs.readdirSync('D:\\nodejs geekshows\\ch8\\test');
// for (const file of files)
//     console.log(file);

//Remove Directory -Directory should be empty
//fs.rmdirSync('D:\\nodejs geekshows\\ch8\\test\\demo');

//Create and Write File
//fs.writeFileSync('readme.txt','Hi, how are you?');

//Read File
// const data=fs.readFileSync('readme.txt');
// console.log(data);

// const data=fs.readFileSync('readme.txt','utf-8');
// console.log(data);

//appedn  data into file
//fs.appendFileSync('readme.txt','hello kush juthani');

//copy file
//fs.copyFileSync('readme.txt','info.txt');

//get File information
const stats=fs.statSync('readme.txt');
console.log(stats.isDirectory());
console.log(stats.isFile());
    
