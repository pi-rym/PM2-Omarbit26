
class Movie{
    constructor(title,year,director,duration,genre,rate,poster){
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

class Repository{
    constructor(){
        this.movies = [];
    }

    createMovie(title,year,director,duration,genre,rate,poster){
        const myMovie = new Movie(title,year,director,duration,genre,rate,poster);
        this.movies.push(myMovie);
    }

    getallMovies(){
        return this.movies;
    }
}


const cardToHtml = ({title,year,director,duration,genre,rate,poster}) => {

    const card = document.createElement('div');

    card.innerHTML=`<h3>${title}</h3>
        <img src=${poster} alt=${poster}>
        <p>Genre: ${genre}</p>
        <p>Duration: ${duration}</p>`

    card.addEventListener('mouseover',function(){
        card.children[1].style.opacity=0.5;
    })

    card.addEventListener('mouseout',function(){
        card.children[1].style.opacity=1;
    })

    return card;
}


const addCardshtml = () => {
    const containerMovies = document.getElementById("container-card-movies");
    containerMovies.innerHTML="";
    const movies = repository.getallMovies();
    const allmoviescards = movies.map(card=>cardToHtml(card));
    allmoviescards.forEach(cardhtml=>{containerMovies.appendChild(cardhtml)});
}

const repository = new Repository();

tempData.forEach(m=>repository.createMovie(m.title,m.year,m.director,m.duration,m.genre,m.rate,m.poster));

addCardshtml();