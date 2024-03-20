const express = require("express");
const {router} = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const validateMovie = require("./middlewares/validateMovie");


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

app.use(validateMovie)

app.use(router);



module.exports = {app};

