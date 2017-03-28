const Comment = require('../models/comment');

exports.postComment = function(req, res, next ) {
  const name = req.body.name;
  const content = req.body.content;
  const articleId = req.body.articleId;
  //const date

  if (!name || !content) {
    return res.status(422).send({error: 'You must provide name and comment'});
  }

    const comment = new Comment({
    name: name,
    content: content,
    articleId: articleId
    });

    comment.save(function(err) {
      if (err) { return next(err); }
    });
}
