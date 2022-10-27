const colors = require('colors');
const fs = require('fs');
const path = require('path');
const {resolve} = require('path');
let route = './README.md';

 function isPathAbsolute ()  {
    let absolutePath = path.isAbsolute(route) // true is absolute
    if (absolutePath === false) { // Checks if the path is absolute
     route = path.resolve(route);
     console.log(route.green);
    }else{
     console.log('The path was absolute!!!');
    }
};

function isThereAFile (){
    if (fs.existsSync(route)) { // Checks if the file exist
        console.log('The file is here! and it says:'.yellow);
        } else {
          console.log('Nothing here!'.magenta);
        }
};
function readTheFile (){ // Read the file
        fs.readFile(route, 'utf-8', (err, data) => {
          if(err) {
            console.log('But, why?:'.red, err);
          } else {
            console.log(data.blue);
          }
        })
    };

function extensionFile (){
const extenFile = path.extname(route);
if (extenFile !== '.md') {
  console.log('This is NOT an md file!'.red);
}
console.log(extenFile);
};

module.exports = {
    isPathAbsolute,
    isThereAFile, 
    readTheFile,
    extensionFile
};