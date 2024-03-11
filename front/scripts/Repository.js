const {Movie} = require("./Movie")

class Repository{
    constructor(){
        this.movies = [];
    }

    createMovie({title,year,director,duration,genre,rate,poster}){
        const myMovie = new Movie(title,year,director,duration,genre,rate,poster);
        this.movies.push(myMovie);
    }

    getallMovies(){
        return this.movies;
    }
}

module.exports = {
    Repository
};