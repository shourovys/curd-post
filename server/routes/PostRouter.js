const express = require('express');
const {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updateFile,
  updatePost,
} = require('../controllers/postControllers');
const { auth } = require('../Middleware/Auth');

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.post('/', auth, createPost);
postRouter.get('/:id', auth, getPost);
postRouter.patch('/:id', auth, updatePost);
postRouter.delete('/:id', auth, deletePost);

module.exports = postRouter;
