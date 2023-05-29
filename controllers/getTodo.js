//*fetching the schema
const TodoSchema = require('../models/Todo')

const getTodo= async (req,res)=>{
    try
    {
       //*getting the all data 
       const datasaved = await TodoSchema.find({});
      
        res.status(200).json({
            success:true,
            data:datasaved,
            message:'data retrieved successfully'
        })

        console.log(datasaved);
    }
    catch(err)
    {
      res.status(500).json({
        success:false,
        message:'error while retriving data'
      })
    }
}

module.exports = getTodo;