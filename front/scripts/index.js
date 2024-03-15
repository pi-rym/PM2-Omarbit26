const { renderFilms } = require("./render");
const {Repository} = require("./Repository");
const {getFilms} = require('./handler');


const myRepository = new Repository();

getFilms(myRepository)
.then(()=>{renderFilms(myRepository)})
.catch((error) => { alert("fail movies");console.log(error)})






