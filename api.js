const fn = require('./path');
const {validateLink} = require('./validateLink'); 

const mdLinks = (route) => 
    new Promise ((resolve, reject)=>{
// Check if the path is absolute and if not make it absolute
 const getPathAbsolute = fn.getPathAbsolute(route);

 let allFiles = [];
// Reads folders
if (fn.itIsADir(getPathAbsolute)){
    allFiles = [...allFiles,...fn.getFolders(getPathAbsolute)];
} allFiles.push(getPathAbsolute);/**A**/

// Get .md files
const mdFiles = allFiles.filter(file => { // Callback /**A**/
  if(fn.isAnMdFile(file) == '.md'){
    return file;
  } 
  //console.log('There is no md file'.red);
});

const arrayOfLinks = [];

mdFiles.forEach((file)=>{ //Creates a new array with the links that are inside the file /**A**/
    
    // Reads the file
const filteredFiles = fn.getTheFile(file);
    // Get the links
const findLinks = /\[(.+)\]\((https?:\/\/.+)\)/gi;// Filtrado por medio de expresiones regulares, g:busqueda global, i: no diferencia entre mayusculas y minusculas
const resultLinks = [...filteredFiles.matchAll(findLinks)]; //Para iterar todos los resultados de insidencia entre un string y una expresion regular.
if (resultLinks !== null || resultLinks !== 0){
    resultLinks.forEach(url =>{
        arrayOfLinks.push({
            href: url[2], // { key : value }
            text: url[1],
            file: file
        });
    });
} 
});

if (arrayOfLinks === null || arrayOfLinks.length === 0) {// Condicional if
    console.log('The are no links in this file');
}

let linksValids=arrayOfLinks.map(object=>{//Array de promesas
   return validateLink(object).then(statusCode=>
        object.response=statusCode
        ).catch(err=>
            object.response=err
            )
             
})

const getArrayCode = Promise.all(linksValids).then(gotArrayCode=>gotArrayCode); // Devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas 

resolve(getArrayCode);
reject('Error');
});

    module.exports = { 
        mdLinks
        };