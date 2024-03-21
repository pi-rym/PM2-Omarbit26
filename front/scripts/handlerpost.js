const axios = require('axios')

const sendPost = (data)=>{
    const config = {
        method: 'post',
        url: 'http://localhost:3000/movies',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
      axios(config)
        .then(function (response) {
            console.log(response)
            alert("Se creo con exito movie en la base de datos")
        })
         .catch(function (error) {
            alert('Error al realizar la solicitud:', error);
        });
}

module.exports = sendPost;