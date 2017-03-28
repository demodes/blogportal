const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = Date.now().getTime;
  // iat = issued  at time
  //sub = subject, vlastnost jwt  ; vyjadruje komu patri token
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  //User has already had their email and password auth'd
  //we just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next ) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({error: 'You must provide email and password'});
  }

// existuje uzivatel s takym emailom
  User.findOne({email: email}, function(err, existingUser) {
    if (err) { return next(err); }

  //ak ano, vrat error
    if (existingUser) {
    return res.status(422).send({ error: 'Email is in use' });
    }

  //ak nie, vytvor a uloz uzivatela
    const user = new User({
    email: email,
    password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      //Respond ,uzivatel bol vytvoreny a ma takyto token
      res.json({ token: tokenForUser(user) });
    });
  });
}
