const fn = require('./path');
const {validateLink} = require('./validateLink') 

const mdLinks = (route, options) => 
    new Promise ((resolve, reject)=>{
// Check if the path is absolute and if not make it absolute
 const getPathAbsolute = fn.getPathAbsolute(route);

 let allFiles = [];
// Reads folders
if (fn.itIsADir(getPathAbsolute)){
    allFiles = [...allFiles,...fn.getFolders(getPathAbsolute)];
} allFiles.push(getPathAbsolute);

// Get .md files
const mdFiles = allFiles.filter(file => {
  if(fn.isAnMdFile(file) == '.md'){
    return file;
  } 
  //console.log('There is no md file'.red);
});

const arrayOfLinks = [];

mdFiles.forEach((file)=>{ //Creates a new array with the links that are inside the file
    
    // Reads the file
const filteredFiles = fn.getTheFile(file);
    // Get the links
const findLinks = /\[(.+)\]\((https?:\/\/.+)\)/gi;
const resultLinks = [...filteredFiles.matchAll(findLinks)];
if (resultLinks !== null || resultLinks !== 0){
    resultLinks.forEach(url =>{
        arrayOfLinks.push({
            href: url[2],
            text: url[1],
            file: file
        });
    });
} else if(resultLinks === null || resultLinks === 0) {
    console.log('The are no links');
}
});

let linksValids=arrayOfLinks.map(object=>{
   return validateLink(object).then(code=>
        object.response=code
        ).catch(err=>
            object.response=err
            )
             
})
const getCode = Promise.all(linksValids).then(gotCode=>gotCode);



resolve(getCode);
reject('Error'.bgRed);
    });

    module.exports = { 
        mdLinks
        };