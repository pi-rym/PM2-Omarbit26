const axios = require('axios')


const getFilms = async (repository)=>{

    try{
        const promisePeliculas = await axios.get('http://localhost:3000/movies');
        const data_movie  = promisePeliculas.data;
        data_movie.forEach(m=>repository.createMovie(m));
    }
    catch(error){
        throw Error(error);
    }
}

module.exports = {
    getFilms
}




