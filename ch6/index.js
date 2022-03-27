//File System Promise API
import * as fa from 'fs/promises';

//Creating Directory - path should be there

/*try{
    await fa.mkdir('D:\\nodejs geekshows\\ch6\\test');
    console.log("Directory Created...");
}
catch(error)
{
    console.log(error)
}*/
//Creating Directory - path is not required to be there

/*try{
    await fa.mkdir('D:\\nodejs geekshows\\ch6\\test1\\demo1',{recursive:true});
    console.log("Directory Created...");
}
catch(error)
{
    console.log(error)
}*/
//read content of Directory
/*try{
    const files=await fa.readdir('D:\\nodejs geekshows\\ch6\\test1');
    for(const file of files)
        console.log(file);
}catch(e)
{
    console.log(e);
}*/
//remove Directory - Directory should be empty
/*try{
    await fa.rmdir('D:\\nodejs geekshows\\ch6\\test\\demo');
    console.log("Directory Removed");
}
catch(e)
{
    console.log(e);
}*/
//create and write file
/*try {
    await fa.writeFile('readme.txt','Hello Node Js');
} catch (error) {
    console.log(error)
}*/
//Read File
/*try {
    const name=await fa.readFile('readme.txt');
    console.log(name);
} catch (error) {
    console.log(error);
}

try {
    const name=await fa.readFile('readme.txt','utf-8');
    console.log(name);
} catch (error) {
    console.log(error);
}*/
//appedn  data into file
// try {
//     await fa.appendFile('readme.txt','hello kush juthani');
// } catch (error) {
//     console.log(error);
// }

//copy file
// try {
//     await fa.copyFile('readme.txt','info.txt');
// } catch (error) {
//     console.log(error);
// }

//get File information
try {
    const stats=await fa.stat('D:\\nodejs geekshows\\ch6\\test1\\emp.js');
    console.log(stats.isDirectory());
    console.log(stats.isFile());
} catch (error) {
    console.log(error);
}