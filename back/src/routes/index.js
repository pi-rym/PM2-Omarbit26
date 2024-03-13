const {Router }= require("express")
const {getMovies} = require("../controllers/index");

const router = Router();


router.get("/movies", getMovies);

module.exports = {router}