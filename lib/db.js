module.exports = {};

module.exports.autoload = function() {
  var mongoose = require('mongoose')
    , mongooseAuth = require('mongoose-auth')
    , conf = require('./conf')
    , UserSchema = new mongoose.Schema({})
    , User;

  UserSchema.plugin(mongooseAuth, {
      everymodule: {
        everyauth: {
            User: function () {
              return User;
            }
        }
      }
    , google: {
        everyauth: {
            myHostname: 'http://localhost:3000'
          , appId: conf.google.clientId
          , appSecret: conf.google.clientSecret
          , redirectPath: '/'
          , scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        }
      }
  });

  mongoose.model('User', UserSchema);

  Server.db = mongoose.connect(conf.mongo.uri);

  User = mongoose.model('User');

  return Server.db;
};