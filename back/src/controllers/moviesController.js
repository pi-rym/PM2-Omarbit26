const movieService = require("../services/movieService")

    
    module.exports = {
        getMovies : async (req,res)=>{

            try {
                const data = await movieService.getMovies();
                console.log(data);
                res.status(200).json(data);
            } 
            catch(error){
                res.status(500).json({
                    error:"Error interno del servidor"
                })
            }
        },
        createMovie : async (req,res)=>{

            const {title,year,director} = req.body;
            try{
                const newUser = await movieService.createMovie({title,year,director});
                res.status(201).json(newUser)
            }
            catch(error){
                res.status(500).json({
                    error:"Error interno del servidor"
                })
            }
        },

        getMovieById: async(req,res) => {
            try{
                const {id} = req.params
                const movie = await movieService.getMovieById(id)
                res.status(200).json(movie)
            }
            catch(err){
                res.status(500).json({
                    error:"Error interno del servidor"
                })
            }
        },

        getMovieByTitle: async(req,res) =>{
            try{
                const {title} = req.body;
                const movie = await movieService.getMovieByTitle(title);
                res.status(200).json(movie);
            }
            catch(error){
                console.log(error)
            }
        }
    }