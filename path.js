const colors = require('colors');
const fs = require('fs');
const path = require('path');
const {resolve} = require('path');
const http = require('http');
const { url } = require('inspector');
const URL = require('url').URL;

 const getPathAbsolute = (route) => { // Checks if the path is absolute and if not makes it absolute
    let absolutePath = path.isAbsolute(route) // true is absolute
    if (absolutePath === false) { // Checks if the path is absolute
     route = path.resolve(route);
     return route
    }
    return route;
};

// const itIsADir=(route)=>{// Checks if the route is of a dir of a file
//   fs.readdir(route, { withFileTypes: true }, (err, files) => {
//     if (err) {
//       console.error('What is wrong?:', err);
//     }
//     console.log('Files: '.bgBlue);
//     files.forEach(file => {
//       // the `isDirectory` method returns true if the entry is a directory
//       const type = file.isDirectory() ? '📂' : '📄';
//       console.log(type, file.name);
//     });
//   });
// };
const itIsADir = (route) => fs.lstatSync(route).isDirectory();

const getFolders = (route, resultFiles = [])=>{// Reads a directory recursively  
 const files = fs.readdirSync(route);
 files.forEach((file)=>{
  const newRoute = path.join(route, file);// 
  if(fs.lstatSync(newRoute).isDirectory()){
    getFolders(newRoute, resultFiles);
  } resultFiles.push(newRoute);
 });
 return resultFiles;
};

const getTheFile = (route)=>{// Checks if the file exist and if it does, read it.
    if (fs.existsSync(route)) { // Checks if the file exist
      return fs.readFileSync(route, 'utf-8');
        } else {
          return ('This file does not exist!'.bgMagenta);
        };
};

const isAnMdFile = (file) => path.extname(file); // Check if the file is an md file
//{
// const extenFile = path.extname(file);
// if (extenFile !== '.md') {
//   console.log('This is NOT an md file!'.red);
// } 
// console.log(file);
// return file;
//};


module.exports = {
    getPathAbsolute,
    itIsADir,
    getFolders,
    getTheFile, 
    isAnMdFile
};