var minified = false;
var min = function(s) { return s + (minified ? '.min' : ''); };

requirejs.config({
  //By default load any module IDs from js/
  baseUrl: 'js',

  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  },
  
  // Minified
  paths: {
    'jquery'       : min('lib/jquery_191'),
    'backbone'     : min('lib/backbone'),
    'bootstrap'    : min('lib/bootstrap'),
    'underscore'   : min('lib/underscore'),
    'handlebars': 'lib/handlebars.runtime',
    'handlebars-templates'   : min('lib/handlebars.templates')
  }
});