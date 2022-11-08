const fn = require('./path');
const axios = require('axios');
const colors = require('colors');
let route = './';

//console.log(fn.getPathAbsolute(route).green);
// fn.itIsADir(route);
// fn.getTheFile(route); 
// fn.extensionFile(route);
console.log(fn.getFolders('test'));
