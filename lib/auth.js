module.exports = {};

module.exports.autoload = function(app) {
  var passport = require('passport')
    , mongoose = require('mongoose')
    , GoogleStrategy = require('passport-google').Strategy
    , host = app.settings.env == "production" ? "myeats.herokuapps.com" : "localhost:3000"
    , User = require('../app/models/User');

  passport.use(new GoogleStrategy({
      returnURL: 'http://'+host+'/auth/google/return',
      realm: 'http://'+host+'/'
    },
    function(identifier, profile, done) {
      User.findOneAndUpdate({ provider: 'google', id: identifier }, profile, { upsert: true }, function(err, user) {
        done(err, user);
      });
    }
  ));

  // Redirect the user to Google for authentication.  When complete, Google
  // will redirect the user back to the application at
  //     /auth/google/return
  app.get('/auth/google', passport.authenticate('google'));

  // Google will redirect the user to this URL after authentication.  Finish
  // the process by verifying the assertion.  If valid, the user will be
  // logged in.  Otherwise, authentication has failed.
  app.get('/auth/google/return', 
    passport.authenticate('google', { successRedirect: '/',
                                      failureRedirect: '/' }));

  app.get('/auth/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  // Set session serialize and deserialize
  passport.serializeUser(function(user, done) {
    done(null, {id: user.id, provider: user.provider});
  });

  passport.deserializeUser(function(sess, done) {
    User.findOne(sess, function(err, user) {
      done(err, user);
    });
  });

  // Simple route middleware to ensure user is authenticated.
  //   Use this route middleware on any resource that needs to be protected.  If
  //   the request is authenticated (typically via a persistent login session),
  //   the request will proceed.  Otherwise, the user will be redirected to the
  //   login page.
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
  }

  function ensureAuthApi(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.json(401, {error: 'Must be logged in.'});
  }

  Server.auth = {
    ensure: ensureAuthenticated,
    ensureApi: ensureAuthApi
  };

  return Server.auth;

};