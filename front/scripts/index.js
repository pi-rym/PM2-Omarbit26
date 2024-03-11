
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

    const card = document.createElement("article");
    const cardDescription = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardRating = document.createElement("div");

    card.classList.add("cards")
    cardDescription.classList.add("description-card")
    cardRating.classList.add("rating-card")
    cardImage.classList.add("img-card")

    cardDescription.innerHTML=`<h3>${title}</h3>`

    cardRating.innerHTML =`<h3>${year}</h3>
        <p>Directed by: ${director}</p>
        <p>Rating: ${rate}</p>
        <p>Genre: ${genre}</p>
        <p>Duration: ${duration}</p>`
    
    cardImage.src=poster;
    cardImage.alt=title;

    card.appendChild(cardDescription);
    card.appendChild(cardImage);
    card.appendChild(cardRating);

    card.addEventListener("mouseover", function(){
        cardRating.style.display = "flex";
        cardRating.style.flexDirection = "column";
        cardRating.style.justifyContent = "center";
    })

    card.addEventListener("mouseleave", function(){
        cardRating.style.display = "none";
    })

    console.log(card);

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

const showData = (data)=>{
    console.log(data)
    data.forEach(m=>repository.createMovie(m.title,m.year,m.director,m.duration,m.genre,m.rate,m.poster))
    addCardshtml();
}


$.get('https://students-api.2.us-1.fl0.io/movies',showData)