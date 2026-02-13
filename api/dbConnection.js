const express = require("express")
const mongoose= require("mongoose");
require('dotenv').config();
const app=express();

function dbConnection(){
    mongoose.connect(process.env.MONGOURI)
    .then(response=>console.log("DB CONNECTED"))
    .catch(err=>console.log(err))
}

module.exports=dbConnection;