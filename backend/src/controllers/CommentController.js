const { Schema } = require('mongoose');
const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);
    const { comments } = post;

    const comment = {
      date: new Date(),
      name: req.body.name,
      body: req.body.comment
    }

    comments.push(comment)
    post.comments = comments;

    await post.save();

    console.log(post);

    req.io.emit('comment', post);

    return res.json(post);
  }
};