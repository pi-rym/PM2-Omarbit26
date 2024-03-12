/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/Movie.js":
/*!**************************!*\
  !*** ./scripts/Movie.js ***!
  \**************************/
/***/ ((module) => {

eval("\nclass Movie{\n    constructor(title,year,director,duration,genre,rate,poster){\n        this.title = title;\n        this.year = year;\n        this.director = director;\n        this.duration = duration;\n        this.genre = genre;\n        this.rate = rate;\n        this.poster = poster;\n    }\n}\n\nmodule.exports={\n    Movie\n};\n\n//# sourceURL=webpack://front/./scripts/Movie.js?");

/***/ }),

/***/ "./scripts/Repository.js":
/*!*******************************!*\
  !*** ./scripts/Repository.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {Movie} = __webpack_require__(/*! ./Movie */ \"./scripts/Movie.js\")\n\nclass Repository{\n    constructor(){\n        this.movies = [];\n    }\n\n    createMovie({title,year,director,duration,genre,rate,poster}){\n        const myMovie = new Movie(title,year,director,duration,genre,rate,poster);\n        this.movies.push(myMovie);\n    }\n\n    getallMovies(){\n        return this.movies;\n    }\n}\n\nmodule.exports = {\n    Repository\n};\n\n//# sourceURL=webpack://front/./scripts/Repository.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {Repository} = __webpack_require__(/*! ./Repository */ \"./scripts/Repository.js\")\nconst {addCardshtml} = __webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\")\nconst {Movie} = __webpack_require__(/*! ./Movie */ \"./scripts/Movie.js\")\n\nconst repository =  new Repository();\n\nconst showData = (data)=>{\n    console.log(data)\n    data.forEach(m=>repository.createMovie(m))\n    console.log(repository);\n    addCardshtml(repository);\n}\n\n\n$.get('https://students-api.up.railway.app/movies',showData)\n\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {Movie} = __webpack_require__(/*! ./Movie */ \"./scripts/Movie.js\")\n\n\n\nconst cardToHtml = ({title,year,director,duration,genre,rate,poster}) => {\n    const card = document.createElement(\"article\");\n    const cardDescription = document.createElement('div');\n    const cardImage = document.createElement('img');\n    const cardRating = document.createElement(\"div\");\n\n    card.classList.add(\"cards\")\n    cardDescription.classList.add(\"description-card\")\n    cardRating.classList.add(\"rating-card\")\n    cardImage.classList.add(\"img-card\")\n\n    cardDescription.innerHTML=`<h3>${title}</h3>`\n\n    cardRating.innerHTML =`<h3>${year}</h3>\n        <p>Directed by: ${director}</p>\n        <p>Rating: ${rate}</p>\n        <p>Genre: ${genre}</p>\n        <p>Duration: ${duration}</p>`\n    \n    cardImage.src=poster;\n    cardImage.alt=title;\n\n    card.appendChild(cardDescription);\n    card.appendChild(cardImage);\n    card.appendChild(cardRating);\n\n    card.addEventListener(\"mouseover\", function(){\n        cardRating.style.display = \"flex\";\n        cardRating.style.flexDirection = \"column\";\n        cardRating.style.justifyContent = \"center\";\n    })\n\n    card.addEventListener(\"mouseleave\", function(){\n        cardRating.style.display = \"none\";\n    })\n\n    console.log(card);\n\n    return card;\n}\n\n\nconst addCardshtml = function(repository) {\n    const containerMovies = document.getElementById(\"container-card-movies\");\n    containerMovies.innerHTML=\"\";\n    const movies = repository.getallMovies();\n    const allmoviescards = movies.map(card=>cardToHtml(card));\n    allmoviescards.forEach(cardhtml=>{containerMovies.appendChild(cardhtml)});\n}\n\nmodule.exports = {addCardshtml};\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;