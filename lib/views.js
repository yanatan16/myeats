module.exports = Server.views = {};

Server.views.autoload = function(app) {
  var hbs = require('hbs')
    , blocks = {};

  hbs.registerHelper('extend', function(name, context) {
      var block = blocks[name];
      if (!block) {
          block = blocks[name] = [];
      }

      block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
  });

  hbs.registerHelper('block', function(name) {
      var val = (blocks[name] || []).join('\n');

      // clear the block
      blocks[name] = [];
      return val;
  });

  hbs.registerHelper('minlib', function (name) {
    if (app.settings.env == 'development') {
      return name;
    } else {
      var sname = name.split('.');
      return sname.slice(0, sname.length-1).join('.') + '.min.' + sname.slice(sname.length-1);
    }
  });

  hbs.registerHelper('json', JSON.stringify);
};
