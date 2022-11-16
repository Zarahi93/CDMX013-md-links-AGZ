const fn = require('./path');
const api = require('./api');

// Absolute C:/Users/Zarakem/Documents/A_Laboratoria/Proyecto 4- Markdown Links/MarkdownLinks/CDMX013-md-links-AGZ
// No absolute ./

//console.log(fn.getPathAbsolute('C:/Users/Zarakem/Documents/A_Laboratoria/Proyecto 4- Markdown Links/MarkdownLinks/CDMX013-md-links-AGZ').green);
//console.log(fn.itIsADir('./'));
//console.log(fn.getFolders('./archivo.txt'));
//console.log(fn.getTheFile('./READMEs.md')); 
// console.log(fn.isAnMdFile('./README.md'));
//console.log(fn.validateLinks('https://docs.npmjs.com/getting-started/what-is-npm'));

api.mdLinks(process.argv[2])
.then(result => console.log('Si jala', result))
.catch(result => console.log('No jala',result));
