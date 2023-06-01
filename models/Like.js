const mongoose= require('mongoose');

const like= new mongoose.Schema({
    user:
    {
        type:String
    },
    post:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }
})

module.exports = mongoose.model('like',like);