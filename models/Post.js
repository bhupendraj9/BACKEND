const mongoose= require('mongoose');

const post= new mongoose.Schema({
    title:
    {
        type:String
    },
    body:
    {
        type:String
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment" //modelname 
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like" //modelname 
    }]
})

module.exports = mongoose.model('post',post);