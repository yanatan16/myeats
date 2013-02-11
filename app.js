var Server = {},
    path = require("path"),
    sys = require("sys"),
    application_root = __dirname;

global.Server = Server;
Server.root = application_root;

require("./lib").setup({
  paths : {
      views :  path.join(application_root,"app","views"),
      root : path.join(application_root,"public"),
      controllers : path.join(application_root,"app","controllers"),
      models : path.join(application_root,"app","models")
    }
});