const mongoose = require('mongoose');
const nodemailer= require("nodemailer");
require("dotenv").config();
const File = new mongoose.Schema({
    name:
    {
        type:String
    },
    email:
    {
        type:String
    },
    tags:
    {
        type:String
    },
    fileURL:
    {
        type:String
    }
})

//post middleware
File.post('save',async function(doc)
{
    try{
    let transporter= nodemailer.createTransport({
        host:"smtp.gmail.com",
        auth:{
            user:process.env.ADMIN,
            pass:process.env.JUST_TEXT
        }
    })

    //sending mail
    let info =await transporter.sendMail({
        from:"Bhupendra Jambhale",
        to:"bjambhale7@gmail.com",
        subject:"Cloudinary upload status",
        html: `<div><h1>You Successfully uploaded content to cloudinary</h1> <p>Click to access : <a href= "${doc.fileURL}">${doc.fileURL}</a></p> </div>`
    })
    
    console.log("mail sent")
    }
    catch(e)
    {
        console.log("errr in sending mail")
    }
   
})

module.exports = mongoose.model('File',File)