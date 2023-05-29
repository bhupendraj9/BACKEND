//*importing the mongoose
const mongoose= require('mongoose');

//*creating a schema
const Todo= new mongoose.Schema({
     title:
     {
        type:String,
        require:true
     },
     description:
     {
        type:String,
        require:true
     },
     createdAt:
     {
        type:Date,
        require:true,
        default:Date.now()
     },
     updatedAt:
     {
        type:Date,
        require:true,
        default:Date.now()
     }

})
//*exporting the model

module.exports = mongoose.model("Todo",Todo);