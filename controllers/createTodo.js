//*importing the schema 
const Todoschema= require('../models/Todo');


const createTodo = async (req,res)=>{
  try
  {
    //whenever the post request will be made then this controller will come in picture so what we have to do is as we want to save data to db we will first fetch the data from that post request body
    //* fetching the title and description from post request
    const {title,description}= req.body;
    //*saving the data to db 
    const datasaved= await Todoschema.create({title,description});
    //*responses
    res.status(200).json({
        message:"success in creation",
        data:datasaved,
        success:true
    })
  }catch(e)
  {
    console.error(e);
    res.status(500).json({
        success:false,
        message:"failure in creation"
        
    })
  }
}
module.exports= createTodo;