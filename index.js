const fn = require('./path');
const api = require('./api');

api.mdLinks(process.argv[2])
.then(result => console.log(result))
.catch(result => console.log(result));
