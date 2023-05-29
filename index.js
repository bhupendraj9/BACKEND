//*importing the express
const express = require('express');
//*making instance of the express
const myapp= express();
//*adding the middleware
myapp.use(express.json());

//*importing the route
const route= require('./routes/TodoRoutes');
const router = require('./routes/TodoRoutes');

//*adding the routes
myapp.use(router);

//*loading the env variables in process object
require("dotenv").config(); 

//*starting the server
myapp.listen(process.env.PORT,()=>{console.log("server listening on port " + process.env.PORT)})

//*making the db connection
//importing the database 
const dbConnection = require('./config/database');
dbConnection();

//*default page 
myapp.get('/',(req,res)=>{
    res.send("THIS IS HOMEPAGE");
})