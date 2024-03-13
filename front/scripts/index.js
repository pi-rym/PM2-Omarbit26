const {Repository} = require("./Repository")
const {addCardshtml} = require("./renderCards")
const {Movie} = require("./Movie")
const axios = require('axios')

const repository =  new Repository();

/*
const renderMovies = async () =>{
    try{
        const promisePeliculas = await axios.get('https://students-api.up.railway.app/movies');
        const data_movie = promisePeliculas.data
        data_movie.forEach(m=>repository.createMovie(m));
        addCardshtml(repository);
        
    }
    catch(error){
        console.log("no se puedo encontrar la informacion de peliculas. Refresque la página.")
    }
}
renderMovies();*/

const promiseMovie = axios.get('https://students-api.up.railway.app/movies');

promiseMovie.then((response)=>{const data_movie = response.data;
    data_movie.forEach(m=>repository.createMovie(m));
    addCardshtml(repository);
})
.catch((error) => { alert("fail movies");console.log(error)});





