const mongoose = require('mongoose');
const Post = require('../models/PostModel');
const PostMessage = require('../models/PostModel');

const postControllers = {};

postControllers.getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

postControllers.getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

postControllers.createPost = async (req, res) => {
  try {
    const { userId } = req;

    const newPost = new Post({ userId, ...req.body });

    const savePost = await newPost.save();

    res.status(201).json(savePost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

postControllers.updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const data = await PostMessage.findByIdAndUpdate(id, req.body, { new: true });

  res.json(data);
};

postControllers.deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully.' });
};

module.exports = postControllers;
