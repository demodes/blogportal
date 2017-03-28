 const Article = require('../models/article')

 exports.getData = function(req,res) {
   Article.find({}, function (err, docs) {
       if (err) { return next(err); }
       res.send({docs:docs});
     });
 }
