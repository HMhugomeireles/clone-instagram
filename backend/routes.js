const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const CommentController = require('./controllers/CommentController');

const PostsRoutes = new express.Router();
const upload = multer(uploadConfig);

PostsRoutes.get('/posts', PostController.index);
PostsRoutes.post('/posts', upload.single('image'), PostController.store);

PostsRoutes.post('/posts/:id/like', LikeController.store);

PostsRoutes.post('/posts/:id/comment', CommentController.store);

module.exports = PostsRoutes;