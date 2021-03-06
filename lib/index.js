
module.exports.setup = function (o) {
  var sys = require("sys")
    , mongoose = require('mongoose')
    , express = require('express')
    , conf = require('./conf')
    , passport = require('passport')
    , app = express.createServer()
    , db = Server.db = require("./db").autoload()
    , MemcachedStore = require('connect-memcached')(express);

  app.configure(function(){
    app.set('views', o.paths.views);
    app.set('view engine','hbs');
    app.use(express.static(o.paths.root));
    app.use(express.favicon());
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ 
      secret: conf.sessionSecret, 
      store: new MemcachedStore(conf.memcached)
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
  });

  app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function(){
    app.use(express.errorHandler());
  });


  Server.paths = o.paths;
  
  require("./models").autoload();
  require("./auth").autoload(app);
  require("./controllers").autoload();
  require("./routes").autoload(app);
  require("./views").autoload(app); 
  
  app.listen(o.port || 3000, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
  });
  
};
