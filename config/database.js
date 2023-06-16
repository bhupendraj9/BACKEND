const mongoose= require('mongoose');
require('dotenv').config();

const DB_URL= process.env.DB_URL;

const dbConnection = ()=>{
    mongoose.connect(DB_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{console.log("Database Connection established")}).catch(()=>{console.log("Error while Connecting to database")})
}

module.exports = dbConnection;