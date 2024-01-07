const path = require('path');

console.log(path);

const findPath = path.join('/pathFolder','subfolder','test.txt');

console.log(findPath);

const basename = path.basename(findPath);

console.log(basename);

const resolve = path.resolve(__dirname,'pathFolder','subfolder','test.txt');

console.log(resolve);