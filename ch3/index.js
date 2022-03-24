//path module

const path=require('path');
console.log(path.basename('D:\\nodejs_geekshows\\ch3'));
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

console.log(path.dirname('D:\\nodejs_geekshows\\ch3'));

console.log(path.extname(__filename));

console.log(path.join('/search','label','course/python','oop'));
//the last parameter (..) is instructing path.join to 'go back a directory'.
console.log(path.join('/search','label','course/python','oop','..'));

console.log(path.join('/search','label','course/python','oop','..','..'));

console.log(path.join(__dirname,'/python','oop'));


//normalizashion

console.log(path.normalize('c:\\temp\\\\foo\\bar'));
console.log(path.normalize('c:\\temp\\\\foo\\bar\\..'));

console.log(path.win32.normalize('c:////temp\\\\/\\/\\/foo1/bar'));

console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);

console.log(path.isAbsolute('//server'));
console.log(path.isAbsolute('\\\\server'));
console.log(path.isAbsolute('c:/foo/..'));
console.log(path.isAbsolute('c:\\foo\\..'));
console.log(path.isAbsolute('bar\\baz'));
console.log(path.isAbsolute('bar/baz'));
console.log(path.isAbsolute('.'));