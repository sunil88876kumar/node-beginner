//const fs = require('fs'); // it can be write in other way as below if we know which object we are using of fs module

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./pathFolder/first.txt','utf8');
const second = readFileSync('./pathFolder/second.txt','utf8');

// console.log(first, second);

writeFileSync('./pathFolder/writeFile.txt',`${first}, ${second}`,{flag: 'a'});