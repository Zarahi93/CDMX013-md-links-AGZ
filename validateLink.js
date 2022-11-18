const axios = require('axios');

const validateLink = (object) => {
    return new Promise((resolve, reject) => {
        axios.get(object.href)
            .then(function (response) {
                // handle success 
                resolve({
                   //href: object.href,
                   //text: object.text,
                   //file: object.file,
                   ...object,
                   status: response.status,
                   message: 'This link works'
                })
            })
            .catch(function (error) {
                // handle error
                //console.log(error.response.status);
                const status = error.response ? error.response.status : 404; /**Operador ternario**/
                reject({
                   ...object,  
                   status,
                   message: 'This link is not working'
                })
            })
    })
}


module.exports={
    validateLink,
}