//*importing mongoose
const mongoose= require('mongoose');

//*loading the env variables into process variables
require("dotenv").config();


//*function that will make connection
const dbConnection = ()=>
{
    mongoose.connect(process.env.URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{console.log("Successful DB connection made")}).catch(()=>{"Error occured during connection"});
}
//*exporting the function
module.exports= dbConnection;