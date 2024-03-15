const {Router }= require("express")
const {getMovies}= require("../controllers/moviesController")

const 
movieRouter = Router();

movieRouter.get("/",getMovies)

module.exports={
    movieRouter
}

