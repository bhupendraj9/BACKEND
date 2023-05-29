const TodoSchema= require('../models/Todo')

const deleteTodo = async(req,res)=>{
  try{
    //*fetching id from request
    const id=req.params.id;
   const deletedData= await TodoSchema.findByIdAndDelete(id);

  if (!deletedData) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }
   else
   {
    console.log("deleted : "+deletedData)
   }
    
    res.status(200).json({
        success:true,
        message:"delete successfull"
    })
  }
  catch(err)
  {
    console.error(err);
    res.status(500).json({
        success:false,
        message:"failure in deletion"
    })
  }


}

module.exports = deleteTodo;