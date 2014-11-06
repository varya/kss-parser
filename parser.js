var kssDivider = require('./test.js').kssDivider,
    fs = require('fs');

var source = fs.readFileSync('./test.scss', 'utf-8');

var ast = kssDivider.matchAll(source, 'any');

console.log(JSON.stringify(ast));
