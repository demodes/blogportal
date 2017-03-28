const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//vytvor local Strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    //over username a password
    User.findOne({ email: email.toLowerCase() }, function(err, user) {
      if (err) {return done(err); }
      if (!user) {return done(null, false); }

      // porovnaj hesla
      user.comparePassword(password, function(err, isMatch) {
        if (err) {return done(err); }
        if(!isMatch) {return done(null, false);}

        return done(null, user);
      });
    });
});

//Setup options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// vytvor Jwt Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    //eistuje user id v payloude v nasej databaze
    User.findById(payload.sub, function(err, user) {
      if (err) {return done(err, false); }

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);
