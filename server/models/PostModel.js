const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: String,
    categories: String,
    disruption: String,
    image: String,
    userId: String,
  },
  { timestamps: true },
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
