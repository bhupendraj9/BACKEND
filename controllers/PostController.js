const post= require('../models/Post');

exports.createPost = async(req,res)=>{
 try{
     //fetching the data from request body 
   const {title,body}= req.body;

   const savedpost= await post.create({title,body});

   res.status(200).json({
    success:true,
    message:"Post created successfully",
    data:savedpost
   })

   console.log("post created successfully");
 }
  catch(e)
  {
    res.status(500).json({
        success:false,
        message:"Error creating post"
    })

    console.log("error in creating post "+e.message);
  }
   
}

exports.getPost =async (req,res)=>{
  try{
     const postFetched= await post.find().populate("comments").populate("likes");
     
     res.status(200).json({
      success:true,
      message:"Post fetched successfully",
      data:postFetched
     })

     console.log("post fetched successfully");
  }
  catch(e)
  {
     res.status(500).json({
      success:false,
      message:"error in fetching post",

     })

     console.log("error in fetching post "+ e.
     message);
  }
}

