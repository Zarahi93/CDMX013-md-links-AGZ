const colors = require('colors');
const fs = require('fs');
const path = require('path');
const {resolve} = require('path');

let route = './archivo.txt';

let absolutePath = path.isAbsolute(route) // true is absolute

if (absolutePath === false) { // Checks if the path is absolute
 route = path.resolve(route);
 console.log(route.green);
}else{
 console.log('The path was absolute!!!');
}

if (fs.existsSync(route)) { // 
console.log('The file is here! and it says:'.yellow);
} else {
  console.log('Nothing here!'.magenta);
}

fs.readFile(route, 'utf-8', (err, data) => {
  if(err) {
    console.log('But, why?:'.red, err);
  } else {
    console.log(data.blue);
  }
});