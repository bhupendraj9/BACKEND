const User= require('../model/User');
const bcryt= require('bcrypt');
require('dotenv').config();

const SignUp= async(req,res)=>{
  try
  {
    const {name,password,email,role} = req.body;

     if(!name || !password || !email || !role) 
     {
      return res.status(400).json({
        success:false,
        message:'Please fill all the details'
      })
     }
    
     const ExistingUser = await User.findOne({ email: email});

     if(ExistingUser)
      {
        return res.status(400).json({
            success:false,
            message:'User already exists'
        })
      }

     let hashedPassword ;
     try{
       hashedPassword = await bcryt.hash(password,10);
       console.log("hashedPassword  -  " ,hashedPassword);
     }
     catch(e)
     {
       return res.status(500).json({
        success:false,
        message:'Error occured while hashing password'
       })
     }
     
     const user = await User.create({name,email,password:hashedPassword,role});

     res.status(200).json({
        success:true,
        message:'User created successfully',
        user:user
     })
  }
  catch(e)
  {
    res.status(500).json({
    success:false,
    message:'Error occured while Sign Up, please try again',
    error:e.message
    })
  }
  
}
module.exports = SignUp;