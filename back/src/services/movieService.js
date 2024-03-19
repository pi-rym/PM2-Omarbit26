const Movie = require("../models/Movie")

module.exports = {
    getMovies: async() => {
        try{
            const movies = await Movie.find();
            return movies
            
        }
        catch(error){
            console.log(error.message)
        }
    },
    createMovie: async (movie) => {
        try{
            const newUser = await Movie.create(movie)
            return newUser
        }
        catch(error){
            console.log(error.message)            
        }
    },

    getMovieById : async (id) => {
        try{
            const movie = await Movie.findById(id);
            return movie;
        }
        catch(error){
            console.log(error.message)     
        }
    },

    findMovieById :async (title) => {
        try{
            const movie = await Movie.findOne({title});
            return movie
        }
        catch(error){
            console.log(error.message) 
        }
    }

}