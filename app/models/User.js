var mongoose = require('mongoose')
  , _ = require('underscore')
  , Schema = mongoose.Schema;

var EmailSchema = new Schema({
    value : String
  , type  : String
});

var UserSchema = new Schema({
    provider       : { type: String, required: true }
  , id             : { type: String, required: true, index: true }
  , displayName    : { type: String }
  , name           : {
        familyName : String
      , givenName  : String
      , middleName : String
    }
  , emails         : [ EmailSchema ]
});

module.exports = Server.models.User = mongoose.model('User', UserSchema);