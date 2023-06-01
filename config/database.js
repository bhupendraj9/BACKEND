const mongoose= require('mongoose')

require("dotenv").config();

const dbConnection = ()=>{
    mongoose.connect(process.env.URL,{useNewURLParser:true, useUnifiedTopology:true}).then(()=>{console.log("connection successful")}).catch(()=>{console.log("connection error")})
}

module.exports = dbConnection;