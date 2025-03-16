const express = require("express");
const app = express();
app.use("/test",(req,res)=>{
    res.send("test connection")
})

app.use("/",(req,res)=>{
    res.send("listening to 4200")
})

app.listen(4200);