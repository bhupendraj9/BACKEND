const jwt= require('jsonwebtoken');

require('dotenv').config();

exports.auth = (req,res,next)=>{
  try
  {
    const token= req.body.token;

    if(!token) return res.status(400).json({success:false, message:'Token missing'})
   

   try{
        const decode=  jwt.verify(token,process.env.JWT_SECRET);
        
        req.user = decode;
        console.log("Decode "+decode);
       }
       catch(e)
       {
         return res.status(403).json({
            success:false,
            message:'invalid token',
            decode
         });
       }  
       next();
  }
  catch(e)
  {
    res.status(500).json({
        success:false,
        message:'error occured while authenticating',
        error:e.message
    })
  }
}

exports.isStudent = (req,res,next)=>{
try
{
  const role= req.user.role;

  if(role==='student')
  {
   return res.status(200).json({
        success:true,
        message:'welcome to Student Page'
    })
  }
  else
  {
    return res.status(500).json({
        success:false,
        message:'This page only for students'
    })
  }
  next();
}
catch(e)
{
    res.status(404).json({
        success:false,
        message:'error occured while authorization on Student route'
    })

}
 
} 


exports.isAdmin = (req,res,next)=>{
try
{
  const role= req.user.role;

  if(role==='admin')
  {
   return res.status(200).json({
        success:true,
        message:'welcome to admin Page'
    })
  }
  else
  {
    return res.status(500).json({
        success:false,
        message:'This page only for admin'
    })
  }
  next();
}
catch(e)
{
    res.status(404).json({
        success:false,
        message:'error occured while authorization on admin route'
    })

}
 
}