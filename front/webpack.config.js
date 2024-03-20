module.exports =  { 
    mode: "development",
    entry: {home:"./scripts/index.js", 
            form:"./scripts/formValidation.js"
    },
    output: {
        path:__dirname+"/public",
        filename: '[name].bundle.js',
    },
};



/*
module.exports =  { 
    mode: "development",
    entry: "./scripts/index.js",
    output: {
        path:__dirname+"/public",
        filename: "bundle.js",
    },
};*/