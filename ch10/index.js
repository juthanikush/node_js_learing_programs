//URL MODULE
import { URL } from 'url';

const myURL = new URL('https://ww.example.com:8000/p/a/t/h?query=string#hash');

console.log(myURL.hash);
console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.protocol);
console.log(myURL.toString);
console.log(myURL.host);
console.log(myURL.href);
console.log(myURL.port);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.toJSON);