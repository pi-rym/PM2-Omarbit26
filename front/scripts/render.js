
const {Movie} = require("./Movie")

const cardToHtml = ({title,year,director,duration,genre,rate,poster}) => {
    const card = document.createElement("article");
    const cardDescription = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardRating = document.createElement("div");

    card.classList.add("cards")
    cardDescription.classList.add("description-card")
    cardRating.classList.add("rating-card")
    cardImage.classList.add("img-card")
    cardImage.classList.add("img-fluid")

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

    return card;
}


const renderFilms = function(repository) {
    const containerMovies = document.getElementById("container-card-movies");
    containerMovies.innerHTML="";
    const movies = repository.getallMovies();
    const allmoviescards = movies.map(card=>cardToHtml(card));
    allmoviescards.forEach(cardhtml=>{containerMovies.appendChild(cardhtml)});
}

module.exports = {renderFilms};