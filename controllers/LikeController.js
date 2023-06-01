const Post = require('../models/Post');
const Like= require('../models/Like')

exports.likePost = async(req,res)=>{
    try
    {
       const {post,user} = req.body;

       const likeSaved= await Like.create({post,user});

       const updatedPost= await Post.findByIdAndUpdate(post,{$push:{likes: likeSaved}},{new:true}).populate("likes").exec();

       res.status(200).json({
        success:true,
        message:"post liked successfully",
        data:likeSaved
       })
    }
    catch(e)
    {
        res.status(500).json({
            success:false,
            message:"like not successful"
        })
    }
}

exports.unlikePost = async(req,res)=>{
    try{
 const {post,likeId} = req.body;

    const likeDeleted = await Like.findByIdAndDelete({post,_id:likeId});

    const postUpdated = await Post.findByIdAndUpdate(post,{$pull :{likes: likeDeleted._id}},{new:true}).populate("likes").exec();

    res.status(200).json({
        success:true,
        message:'like deleted successfully',
        data:likeDeleted
    })
    }

    catch(e)
    {
       res.status(500).json({
        success:false,
        message:"like deletion failure"
       })
       console.log(e.message)
    }

}