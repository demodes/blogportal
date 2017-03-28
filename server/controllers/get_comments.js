const Comment = require('../models/comment');

exports.getData = function(req,res) {
  Comment.find({}, function (err, docs) {
      if (err) { return next(err); }
      res.send({docs:docs});
    });
}
