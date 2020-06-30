const express = require("express")
const app = express()
const port = 8090;

app.get("/",function(req,res){
    res.send("Express app is working!")
})
app.listen(port, function () {
    console.log("The app is running on port ", port)
})