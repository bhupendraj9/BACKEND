const File = require('../models/File')
const cloudinary= require('cloudinary').v2
exports.localUpload = (req,res)=>{
   
   try{
      
      if(!req.files)
      {
        console.log(req.files)
        return res.status(404).json({
            success:false,
            message:'No file included',
            
        })
      }

      const file = req.files.file;
       console.log("file ->" +file)

      let path = __dirname + "/files/"+ `${file.name.split('.')[0]}`+Date.now() + `.${file.name.split('.')[1]}`;
      console.log(path)

      file.mv(path,(err)=>{console.log("error in local file upload")
     })
     
     res.status(200).json({
        success:true,
        message:'file uploaded to local storage successfully',
        file: file
     })
   }
   catch(e)
   {
    console.log("Error occured in Local Upload "+e.message);
    res.status(500).json({
        success:false,
        message:'Error occured in Local Upload',
        error:e.message,
    
    })
   }

}

const validate =(extension,types)=>{
   if(types.includes(extension)) 
    return true;
   return false;
}

const uploadToCloud = async(file,folder,quality)=>{
   const options = {
     folder:folder,
   }
   options.resource_type = "auto";
   if(quality)
    options.quality = quality
   
   return cloudinary.uploader.upload(file.tempFilePath,options)
}

exports.ImageUpload = async(req,res)=>{
   try
   {
    //fetching things from req
    const{name,email,tags}= req.body;
    if(!req.files)
    {
      return res.status(404).json({
         success:false,
         message:'file not present'
      })
      process.exit(1);
    }
    const file= req.files.file;
    //validate
    const extension= `${file.name.split('.')[1]}`;
    const types=["jpeg", "jpg", "png"];
    const check = validate(extension,types,res);
    if(!check)
    {
      return res.status(400).json({
         success:false,
         message:'file extension not supported'
      })
    }
    console.log("check1");
    const response= await uploadToCloud(file,"Bhupendra");
     console.log("check2");
    const dbResponse = await File.create({name,email,tags,fileURL:response.secure_url})
       console.log("check3");
    console.log("db save - "+dbResponse)

    res.status(200).json({
      success:true,
      message:'file successfully uploaded',
      file: response ,
      dbResponse: dbResponse
    })

   
   }
   catch(e)
   {
      res.status(400).json({
         success:false,
         message:'Something went wrong in image upload',
         error : e.message
      })
   }
  

}

/*SOME ERROR HERE */

exports.VideoUpload = async(req,res)=>{
   try
   {
       const {name,email,tags} = req.body;
       
       if(!req.files)
       {
         return res.status(404).json({
            success:false,
            message:'No files were uploaded'
         })
         process.exit(1);
       }
       
       const file= req.files.file;

       const types = ["mp4","mov"];
       const extension = `${file.name.split('.')[1]}`

       validate(extension, types);
       
       const response= await uploadToCloud(file,"Bhupendra");
       
       const dbResponse = await File.create({name,email,tags,fileURL:response.secure_url});
       res.status(200).json({
         success:true,
         message:'video uploaded successfully',
         file:response,
         dbResponse: dbResponse
       })

   }
   catch(e)
   {
      res.status(400).json({
         success:false,
         message:'Something went wrong in video upload',
         error:e.message
      })
   }

   
}

exports.CompressedImageUpload = async(req,res)=>{
    
   try
   {
   
       const {name,tags,email} = req.body;

    if(!req.files) 
    {
      return res.status(400).json({
         success:false,
         message:'Error occured while compressed file upload'
      })
    }

    const file= req.files.file;

    const extension = `${file.name.split('.')[1]}`
    const types = ["jpg","jpeg","png"];

    if(!validate(extension,types))
    {
      return res.status(400).json({
         success:false,
         message:'extension not supported for this upload'
      })
    }
    
   const response = await uploadToCloud(file,"Bhupendra",50);

   const dbSaved = await File.create({email,name,tags,fileURL:response.secure_url});

   res.status(200).json({
      success:true,
      message:'compressed image uploaded successfully',
      file:response,
      dbSaved:dbSaved
   })

   }
   catch(e)
   {
      res.status(500).json({
         success:false,
         message:'error while uploading compressed image',
         error:e.message
      })
   }


   
}
