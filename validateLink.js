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
                   msg: response.statusText
                })
            })
            .catch(function (error) {
                // handle error
                //console.log(error.response.status);
                const status = error.response ? error.response.status : 404
                reject({
                   ...object,  
                   status,
                   msg: 'Fail'
                })
            })
    })
}


module.exports={
    validateLink,
}

/*
validateLink('https://googlejajaja.com')
.then(unarespuesta=>console.log(unarespuesta))
.catch(err=>console.log(err))
*/