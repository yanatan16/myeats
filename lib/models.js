module.exports = Server.models = {};

Server.models.autoload = function() {
  var fs = require("fs")
    , path = require("path")
    , mongoose = require("mongoose")
    , sys = require("sys")
    , _ = require('underscore')
    , files = fs.readdirSync( Server.paths.models )
    , names = _.map(files, function (f) {
        return( path.basename(f) );
      });

  _.each(names,function(model) {
    require( Server.paths.models + "/" + model );
  });

  
};
