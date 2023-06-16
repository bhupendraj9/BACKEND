const express = require('express');
const app= express();
const routes= require('./routes/routes');
const dbConnection =require('./config/database');
require('dotenv').config();
const PORT= process.env.PORT || 3000

app.use(express.json());
app.use(routes);

dbConnection();

app.listen(PORT,()=>{console.log("Server Started on port "+PORT);});

