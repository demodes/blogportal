const Article = require('../models/article')

exports.getData = function(req,res) {
  const title = req.headers.title;

  Article.find({title: title}, function (err, docs) {
      if (err) { return next(err); }
      res.send({docs:docs});
    });
}
