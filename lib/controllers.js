module.exports = Server.controllers = {
  handlers : {}
};

Server.controllers.autoload = function() {
  var fs = require("fs")
    , path = require("path")
    , sys = require("sys")
    , files = fs.readdirSync( Server.paths.controllers )
    , _ = require('underscore')
    , names = _.map(files,function (f) {
        return( path.basename(f) );
      });
    
  _.each(names, function (controller) {
    var c_id = controller.replace(/.js$/,'').toLowerCase();

    Server.controllers.handlers[c_id] = 
      require( Server.paths.controllers + "/" + controller );
  });
};
