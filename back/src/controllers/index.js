
const getMovies = (req,res)=>{
res.status(200).send("Estamos recibiendo una solicitud de peliculas")
console.log("Estamos recibinedo una solicitud de peliculas");
}


module.exports = {
    getMovies
}