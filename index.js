const express= require('express');
const app = express();

require("dotenv").config();

app.use(express.json());

const dbConnection= require('./config/database');
dbConnection();

const blogRoutes= require('./routes/blogRoutes');
app.use(blogRoutes)

app.get('/',(req,res)=>{res.send("<h1>BLOG PAGE</h1>")})

app.listen(process.env.PORT,()=>{console.log("Server started at port " + process.env.PORT)})

