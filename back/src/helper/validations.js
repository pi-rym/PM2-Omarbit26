module.exports = {
    movie : ({title ,year, director})=>{
        if(!title || !year || !director){
            return false
        }
        return true
    }
}