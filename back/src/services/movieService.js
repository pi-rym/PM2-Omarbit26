const Movie = require("../models/Movie")
const Movies = require("../types/class")
const validations = require("../helper/validations")

module.exports = {
    getMovies: async() => {
            const promisemovies = await Movie.find();
            return promisemovies.map(movie => {
                if(validations.movie(movie)){
                    return new Movies(movie)
                }
                    
                
            })

            return pelis
            
        
    },
    createMovie: async (movie) => {
            const newMovie = await Movie.create(movie)
            return newMovie
    },

    getMovieById : async (id) => {
            const movie = await Movie.findById(id);
            return movie;

    },

    findMovieById :async (title) => {
            const movie = await Movie.findOne({title});
            return movie
    }

}