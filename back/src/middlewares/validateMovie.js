const validateMovie = (req, res, next) =>{

  
        const {title,year,director,duration,genre,rate,poster} = req.body
        console.log(title);
        if(![title, year, director,duration, genre, rate,poster,year>=1900,year<=2025].every(Boolean)) return res.status(400).json({message: "Datos incompletos"})
    
        next()
}


module.exports = validateMovie