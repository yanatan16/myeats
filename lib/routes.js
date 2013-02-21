var routes = {
      '/'           : ['get', 'myeats.index']

    , '/api/v1/restaurants' : ['get'  , Server.auth.ensureApi, 'myeats.api.random']
    , '/api/v1/restaurant'  : ['post' , Server.auth.ensureApi, 'myeats.api.add']

    , '/api/v1/account' : ['get', 'test.account']
  };

var retrieve = function (path) {
  var paths = path.split('.');
  try {
    var obj = Server.controllers.handlers;

    while (paths.length > 0) {
      var obj = obj[paths.shift()];
    }
    return obj;

  } catch (err) {
    throw path + ' doesn\'t exist in Server.controllers.handlers';
  }
}

module.exports.autoload = function (app) {
  var _ = require('underscore');

  _.each(_.pairs(routes), function (pair) {
    var path = pair.shift()
      , args = pair.shift()
      , method = args.shift()
      , controller = args.pop()
      , handler = retrieve(controller)
      , applyArgs = [path].concat(args).concat([handler]);

      if (!handler) {
        console.log('ERROR: Route ' + path + ' can\'t be setup because ' + controller + ' can\'t be found!');
        return;
      }

      app[method].apply(app, applyArgs);
  });
};
