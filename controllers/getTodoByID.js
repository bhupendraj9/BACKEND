const TodoSchema= require('../models/Todo')

const getTodoByID= async (req,res)=>{
//*fething the id from the request 
try{
const id= req.params.id;
 
const dataOfID = await TodoSchema.find({_id:id});

res.status(200).json({
    success:true,
    message:"fetch by id successful",
    data:dataOfID
})

console.log(dataOfID);
}
catch(e)
{ 
    console.error(e);
    console.log("error on fetch by id");
    res.status(500).json({
        success:false,
        message:"error on fetch by id"
    })
}
}

module.exports = getTodoByID;