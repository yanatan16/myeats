module.exports = {};

module.exports.autoload = function() {
  var mongoose = require('mongoose')
    , conf = require('./conf');

  Server.db = mongoose.connect(conf.mongo.uri);

  return Server.db;
};