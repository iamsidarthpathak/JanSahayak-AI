const express = require("express");
const app= express();
let port = 1818;
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname)));
app.listen(port,()=>{
    console.log(`server is working at port ${port}`);
})
app.get("/",(req , res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})