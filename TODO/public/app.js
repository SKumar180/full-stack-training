const express=require("express");
const app=express()
const port=2020
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send("Hello from Express")
})


app.listen(port,()=>{
    console.log('App running on port ',port);
})