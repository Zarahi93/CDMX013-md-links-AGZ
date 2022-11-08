const axios = require('axios');

const apiUrl = 'https://6349dd0433bb42dca4fafb02.mockapi.io/products';
const goodLink = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf';
const badLink = 'https://www.otracosa.rt';

const promesa1 = axios.get(`${apiUrl}/1`);
const promesa2 = axios.get(`${apiUrl}/2`);

const data = promesa1.then((resultado) =>  resultado.data);
data.then(console.log);
console.log(data);

