// 
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'))

// 



// 
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})



