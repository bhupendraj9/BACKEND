const Comment= require('../models/Comment')
const Post = require("../models/Post")
const createComment= async(req,res)=>{
  try{
    const {post,user,body}= req.body;

    const commentPosted= await Comment.create({post,user,body});

    const postUpdated = await Post.findByIdAndUpdate(post, {$push:{comments: commentPosted._id}},{new:true}).populate("comments").exec();

    res.status(200).json({
        success:true,
        message:"commented successfully",
        data:commentPosted,
     
    })
}
catch(e)
{
    res.status(500).json({
        success:false,
        message:"comment unsuccessful",
    })
}
}

module.exports = createComment;