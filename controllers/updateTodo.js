const TodoSchema = require('../models/Todo');

const updateTodo = async(req,res)=>{
  try
  {
    //*fetching the id 
    const id= req.params.id;
    //*fetching the updated values from the put request body 
    const {title,description} =req.body;
    //*updating data accordingly
    const updateddata = await TodoSchema.findByIdAndUpdate({_id:id},{title:title,description:description, updatedAt:Date.now()})


    res.status(200).json({success:true,
    data:updateddata, message:"updation successful"})


   
    if (!updatedData) { return res.status(404).json({ success: false, message: 'Todo not found', }); }
    
  }
  catch(e)
  {
     res.status(500).json({
        success:false,
        message:"error in updation"
     })
     console.error(e.message);
  }
}
module.exports = updateTodo;