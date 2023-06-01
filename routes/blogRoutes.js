const express= require('express');

const router= express.Router();
const {createPost,getPost}= require('../controllers/PostController')
const createComment= require("../controllers/CommentController")
const {likePost,unlikePost}= require("../controllers/LikeController")

router.post('/posts',createPost);
router.get('/posts/create',getPost);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);
router.post('/comments/create',createComment);

module.exports =router;