const express= require('express');
const app = express();

require('dotenv').config();

const dbConnection = require('./config/database')
const CloudConnect= require('./config/cloud')
const routes = require('./routes/routes');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(express.json());
app.use(routes);

CloudConnect();

dbConnection();
app.listen(PORT, ()=>{console.log("Server started on port " +PORT)})


