const {Router }= require("express")
const moviesController = require("../controllers/moviesController")
const movieRouter = Router();
const validateMovie = require("../middlewares/validateMovie")

movieRouter.get("/", moviesController.getMovies)
movieRouter.get("/:id", moviesController.getMovieById)
movieRouter.post("/", validateMovie ,moviesController.createMovie)

module.exports={
    movieRouter
}

