const {Router }= require("express")
const moviesController = require("../controllers/moviesController")

const movieRouter = Router();

movieRouter.get("/", moviesController.getMovies)
movieRouter.get("/:id", moviesController.getMovieById)
movieRouter.post("/", moviesController.createMovie)

module.exports={
    movieRouter
}

