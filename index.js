const fs = require('fs');
const path = require('path');
//const {resolve} = require('path');

let route = 'archivo.txt'
// if (route == absolutePath){
//   console.log('The path was absolute!!!');
// }else{
//   console.log(absolutePath);
// }
const isAbsolutePath =  path.isAbsolute(route);
console.log(isAbsolutePath);



// if (fs.existsSync(path)) {
//   console.log('The file is here! and it says:');
// } else {
//   console.log('Nothing here!');
// }

// fs.readFile(path, 'utf-8', (err, data) => {
//   if(err) {
//     console.log('But, why?:', err);
//   } else {
//     console.log(data);
//   }
// });