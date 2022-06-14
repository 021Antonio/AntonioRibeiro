const express = require("express")

const app = express()
app.use(express.static("../frontEnd"))
app.get("/",(rec, res)=>{
res.render("index")
})

app.listen(3001,"127.0.0.1", ()=>{
    console.log("O servidor esta rodando http://127.0.0.1:3001")
})
