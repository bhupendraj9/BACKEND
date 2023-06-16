const cloudinary = require('cloudinary').v2
require('dotenv').config();
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_SECRET =process.env.API_SECRET;
const API_KEY= process.env.API_KEY;

const CloudConnect =()=>{
    try{
     cloudinary.config(
        {
            cloud_name :CLOUD_NAME,
            api_key:API_KEY,
            api_secret:API_SECRET
        }
     )
     console.log("cloudinary connection successful")
    }
    catch(e)
    {
        console.log("error in connecting to cloudinary: " + e.message)
    }
}
module.exports = CloudConnect;
