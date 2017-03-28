const Article = require('../models/article');

exports.postArticle = function(req, res, next ) {
  const title = req.body.title;
  const abstract = req.body.abstract;
  const content = req.body.content;
  const author = req.body.author;
  //const date

  if (!title || !content) {
    return res.status(422).send({error: 'You must provide title and content'});
  }

  //vytvor a uloz clanok
    const article = new Article({
    title: title,
    abstract: abstract,
    content: content,
    author: author
    //date
    });

    article.save(function(err) {
      if (err) { return next(err); }
    });
}
