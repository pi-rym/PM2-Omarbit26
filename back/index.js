const {app} = require("./src/server");
const dbConnection = require("./src/config/dbConnection")

const PORT =  3000


dbConnection().then(()=>{
    app.listen(PORT,()=>{console.log(`Servidor escuchando en el puerto: ${PORT}`)})
}).catch((err)=>console.log("tenemos problemas con la conexios ala DB",err.message))

