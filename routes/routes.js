const express = require('express');

const router = express.Router();
const {localUpload, ImageUpload, VideoUpload, CompressedImageUpload} = require('../controllers/FileUpload')

router.post('/localUpload', localUpload);
router.post('/imageupload',ImageUpload);
router.post('/videoupload',VideoUpload);
router.post('/compressed',CompressedImageUpload)
router.get('/temp',(req,res)=>{res.json({
    message :'test chala'
})})

module.exports = router