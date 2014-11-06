var kssDivider = require('./test.js').kssDivider,
    fs = require('fs');

var source = fs.readFileSync('./test.scss', 'utf-8');
console.log(kssDivider.matchAll(source, 'any'));
