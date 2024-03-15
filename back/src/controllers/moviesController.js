const {getMovieService} = require("../services/movieService")


const getMovies = async (req,res)=>{

    try {
        const data = await getMovieService();
        console.log(data);
        res.status(200).json(data);
    } 
    catch(error){
        res.status(500).json({
            error:"Error interno del servidor"
        })
    }

    }
    


    
    module.exports = {
        getMovies
    }