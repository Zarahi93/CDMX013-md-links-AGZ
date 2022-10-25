const fs = require('fs');
const path = require('path');
const {resolve} = require('path');

let route = 'archivo.txt';

//let route = 'C:\Users\Zarakem\Documents\A_Laboratoria\Proyecto 4- Markdown Links\MarkdownLinks\CDMX013-md-links-AGZ\archivo.txt';

let absolutePath = path.isAbsolute(route) // true is absolute
if (absolutePath === false) {
 route = path.resolve(route);
 console.log(route);
}else{
 console.log('The path was absolute!!!');
}

if (fs.existsSync(route)) {
console.log('The file is here! and it says:');
} else {
  console.log('Nothing here!');
}

fs.readFile(route, 'utf-8', (err, data) => {
  if(err) {
    console.log('But, why?:', err);
  } else {
    console.log(data);
  }
});