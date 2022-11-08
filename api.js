const fn = require('./path');


const mdLinks = (route, options) => 
    new Promise ((resolve, reject)=>{
// Check if the path is absolute and if not make it absolute
 const getPathAbsolute = fn.getPathAbsolute(route);

 let allFiles = [];
// Reads folders
if (fn.itIsADir(getPathAbsolute)){
    allFiles = [...allFiles,...fn.getFolders(getPathAbsolute)];
} allFiles.push(getPathAbsolute);
    })
