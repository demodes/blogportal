const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: String,
  content: String,
  articleId: String
  //date: { type: Date, default: Date.now }
});

const commentModel = mongoose.model('comment', commentSchema);

module.exports = commentModel;
