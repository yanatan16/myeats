var routes = {
      '/'           : ['get'  , 'myeats.index']


    , '/api/random' : ['get'  , 'myeats.api.random']
    , '/api/add'    : ['post' , 'myeats.api.add']
  };

var retrieve = function (obj, path) {
  var paths = path.split('.');
  try {

    while (paths.length > 0) {
      obj = obj[paths.shift()];
    }
    return obj;

  } catch (err) {
    throw path + ' doesn\'t exist in obj';
  }
}

module.exports.autoload = function (app) {
  var _ = require('underscore');

  _.each(_.pairs(routes), function (pair) {
    var path = pair.shift()
      , method = pair[0].shift()
      , controller = pair[0].shift()
      , handler = retrieve(Server.controllers.handlers, controller)

      app[method](path, handler);
  });
};
