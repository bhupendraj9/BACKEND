const express = require('express');
const router = express.Router();
const Login = require('../controllers/Login');
const SignUp = require('../controllers/SignUp');
const {auth,isAdmin,isStudent} =require('../middlewares/auth');
router.get('/test',(req,res)=>{res.status(200).json({message:"Welcome to test route"})})

router.post('/login',Login);
router.post('/signup',SignUp);

//protected routes
router.get('/student',auth,isStudent,(req,res)=>{res.status(200).json({
    message:'Welcome to student route '
})})

router.get('/admin',auth,isAdmin,(req,res)=>{res.status(200).json({
    message:'Welcome to admin route '
})})

module.exports =router;