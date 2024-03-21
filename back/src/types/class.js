class Movies{

    constructor({title,year,director,genre,rate,poster}){

        if(!title||!director||!poster){
            throw Error("Datos insuficientes;")
        }
        else{
            this.title = title
            this.year =year
            this.director = director
            this.genre = genre
            this.rate = rate
            this.poster = poster
        }
    }
}

module.exports = Movies;