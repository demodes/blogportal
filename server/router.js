const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const PostArticle = require('./controllers//post_article');
const GetArticles = require('./controllers/get_articles');
const Article = require('./models/article');
const Comment = require('./models/comment');
const GetMyArticle = require('./controllers/get_my_article');
const PostComment = require('./controllers/post_comment');
const GetComments =require('./controllers/get_comments');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false});

module.exports = function(app) {
  app.get('/', requireAuth, function(req,res) {
    res.send({ message: 'something...' });
  });

  app.get('/articles', GetArticles.getData);
  app.get('/myarticle', GetMyArticle.getData);
  app.get('/getcomments', GetComments.getData);

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.post('/article', PostArticle.postArticle);
  app.post('/postcomment', PostComment.postComment);
}
