const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  abstract: String,
  content: String,
  author: String
  //date: { type: Date, default: Date.now }
});

const articleModel = mongoose.model('article', articleSchema);

module.exports = articleModel;
