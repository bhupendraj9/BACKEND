const mongoose= require('mongoose');
require('dotenv').config();
const DB_URL= process.env.DB_URL;

const dbConnection = ()=>{
    mongoose.connect(DB_URL,{useNewUrlParser:true, useUnifiedTopology:true}).
    then(()=>{console.log("database connection established")}).catch((e)=>{console.log(" database Connection error "+e.message)})
}
module.exports = dbConnection;