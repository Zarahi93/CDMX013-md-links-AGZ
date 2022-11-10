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

const ArrayOfLinks = [];

mdFiles.forEach((file)=>{ //Creates a new array with the links that are inside the file
    
    // Reads the file
    const filteredFiles = fn.getTheFile(file);
    // Get the links
const findLinks = /\[(.+)\]\((https?:\/\/.+)\)/gi;
const resultLinks = [...filteredFiles.matchAll(findLinks)];
if (resultLinks !== null || resultLinks !== 0){
    resultLinks.forEach(url =>{
        ArrayOfLinks.push({
            href: url[2],
            text: url[1],
            file: file
        });
    });
}
let linksValids=ArrayOfLinks.map(objeto=>{
    
    return validateLink(objeto.href).then(codigo=>
        objeto.respuesta=codigo
        ).catch(err=>
            objeto.respuesta=err
            )
           
            
})
Promise.all(linksValids).then(alok=>console.log(alok))
// Validate links 

});


resolve(ArrayOfLinks);
reject('There are no links in this file'.bgRed);
    });

    module.exports = { 
        mdLinks
        };