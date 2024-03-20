const validateMovie = (req, res, next) =>{

    if(req.method==="post"){
        const {title,year,director,duration,genre,rate,poster} = req.body
        if(![title, year, director,duration, genre, rate,poster].every(Boolean)) return res.status(400).json({message: "Faltan datos por completar"})
    }
    next()
}


module.exports = validateMovie