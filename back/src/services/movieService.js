const Movie = require("../models/Movie")

module.exports = {
    getMovies: async() => {
        try{
            const movies = await Movie.find();
            return movies
            
        }
        catch(error){
            throw Error(error.message)  
        }
    },
    createMovie: async (movie) => {
        try{
            const newMovie = await Movie.create(movie)
            return newMovie
        }
        catch(error){
            throw Error(error.message)             
        }
    },

    getMovieById : async (id) => {
        try{
            const movie = await Movie.findById(id);
            return movie;
        }
        catch(error){
            throw Error(error.message)       
        }
    },

    findMovieById :async (title) => {
        try{
            const movie = await Movie.findOne({title});
            return movie
        }
        catch(error){
            throw Error(error.message)   
        }
    }

}