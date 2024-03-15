const axios = require('axios')



class Movie{

    constructor({title,year,director,genre,rate,poster}){
        
        if(!title||!director||!poster){
            throw Error("Datos insuficientes;")
        }
        else{
            this.title = title
            this.year =year
            this.director = director
            this.genre = genre
            this.rate = rate
            this.poster = poster
        }
    }
}





const getMovieService = async() => {

    try{
        const promisePeliculas = await axios.get('https://students-api.up.railway.app/movies');
        


        return promisePeliculas.data.map(element => new Movie(element))
        
    }
    catch(error){
        throw Error(error);
    }
} 

module.exports = {
    getMovieService
}