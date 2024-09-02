const express = require("express")
const mongoose= require("mongoose");
const app=express();

const uri= "mongodb+srv://Deepanshu12:Deepanshu12@cluster0.aqe9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

function dbConnection(){
    mongoose.connect(uri)
    .then(response=>console.log("DB CONNECTED"))
    .catch(err=>console.log(err))
}

module.exports=dbConnection;