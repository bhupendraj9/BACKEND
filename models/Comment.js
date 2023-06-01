const mongoose= require('mongoose');

const comment= new mongoose.Schema({
    user:
    {
        type:String,
    },
    body:
    {
        type:String
    },
    post:
    {
       type:mongoose.Schema.Types.ObjectId,
       ref:"post"
    }
    
})

module.exports = mongoose.model("comment",comment);