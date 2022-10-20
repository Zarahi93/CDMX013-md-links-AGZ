// module.exports = () => {
//   // ...
// };
let fs = require('fs');

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});