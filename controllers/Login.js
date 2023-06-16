const User = require('../model/User');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config();
const Login = async(req,res)=>{
  
    try{
      const {email,password} = req.body;
      
      if(!email || !password) 
      {
        return res.status(400).json({
            success:false,
            message:'Please provide all required information'
        })
      }

      const user= await User.findOne({email: email})

      if(!user)
      {
        return res.status(500).json({
            success:false,
            message:'User Not Found'
        })
      }
       
      if(!await bcrypt.compare(password, user.password))
      {
        return res.status(500).json({
            success:false,
            message:'Password mismatch'
        })
      }
      
      const payload= {
        name:user.name,
        email:user.email,
        role:user.role
      }

      const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'})
         
      console.log("token = " + JSON.stringify(token));
    
      res.cookie("MyCookie",token,{expires:new Date( Date.now()+24*60*60*1000)})
      
      user.password = undefined;
      

      res.status(200).json({
        success:true,
        message:'Token sent and Login Successful',
        token:token,
        user:user
      })
    }
    catch(e)
    {
        res.status(500).json({
            success:false,
            message:'Error occured during Login. Please try again',
            error:e.message
        })
    }

}
module.exports = Login