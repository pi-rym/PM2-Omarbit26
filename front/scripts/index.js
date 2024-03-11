const {Repository} = require("./Repository")
const {addCardshtml} = require("./renderCards")
const {Movie} = require("./Movie")

const repository =  new Repository();

const showData = (data)=>{
    console.log(data)
    data.forEach(m=>repository.createMovie(m))
    console.log(repository);
    addCardshtml(repository);
}


$.get('https://students-api.2.us-1.fl0.io/movies',showData)

