const colors = require('colors');
const fs = require('fs');
const path = require('path');
const {resolve} = require('path');
const axios = require('axios');
const http = require('http');

 const getPathAbsolute = (route) => {
    let absolutePath = path.isAbsolute(route) // true is absolute
    if (absolutePath === false) { // Checks if the path is absolute
     route = path.resolve(route);
     return route
    }
    return route;
};

const itIsADir=(route)=>{// Checks if the route is of a dir of a file
  console.log(route);
  fs.readdir(route, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('What is wrong?:', err)
      return
    }
    console.log('files: ')
    files.forEach(file => {
      // the `isDirectory` method returns true if the entry is a directory
      const type = file.isDirectory() ? '📂' : '📄'
      console.log(type, file.name)
    })
  })
};

const getFolders = (route, resultFiles = [])=>{// Reads a directory recursively  
 const files = fs.readdirSync(route);
 files.forEach((file)=>{
  const newRoute = path.join(route, file);// 
  if(fs.lstatSync(newRoute).isDirectory()){
    getFolders(newRoute, resultFiles);
  } resultFiles.push(newRoute);
 })
 return resultFiles;
}

const getTheFile = (route)=>{
    if (fs.existsSync(route)) { // Checks if the file exist
      fs.readFile(route, 'utf-8', (err, data) => {// Read the file
        if(err) {
          console.log('But, why?:'.red, err);
        } else {
          console.log(data.blue);
        }
      })
        } else {
          console.log('Nothing here!'.magenta);
        }
};

const isAnMdFile = (route)=>{
const extenFile = path.extname(route);
if (extenFile !== '.md') {
  console.log('This is NOT an md file!'.red);
}
console.log(extenFile);
};


module.exports = {
    getPathAbsolute,
    itIsADir,
    getFolders,
    getTheFile, 
    isAnMdFile,
};