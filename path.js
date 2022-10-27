const colors = require('colors');
const fs = require('fs');
const path = require('path');
const {resolve} = require('path');

 function getPathAbsolute (route)  {
    let absolutePath = path.isAbsolute(route) // true is absolute
    if (absolutePath === false) { // Checks if the path is absolute
     route = path.resolve(route);
    }
    return route;
};

function itIsADir(route){
  console.log(route);
  fs.readdir(route, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(err)
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

function getTheFile (route){
    if (fs.existsSync(route)) { // Checks if the file exist
      fs.readFile(route, 'utf-8', (err, data) => {
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

function extensionFile (route){
const extenFile = path.extname(route);
if (extenFile !== '.md') {
  console.log('This is NOT an md file!'.red);
}
console.log(extenFile);
};


module.exports = {
    getPathAbsolute,
    getTheFile, 
    extensionFile,
    itIsADir
};