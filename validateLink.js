const axios = require('axios');


const validateLink = (href) => {
    return new Promise((resolve, reject) => {
        axios.get(href)
            .then(function (response) {
                // handle success 
                resolve(response.status)
            })
            .catch(function (error) {
                // handle error
                reject('404')
            })
    })
}

module.exports={
    validateLink
}

/*
validateLink('https://googlejajaja.com')
.then(unarespuesta=>console.log(unarespuesta))
.catch(err=>console.log(err))
*/