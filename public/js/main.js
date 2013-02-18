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
    'jquery'       : 'lib/jquery_191',
    'backbone'     : 'lib/backbone',
    'bootstrap'    : 'lib/bootstrap',
    'underscore'   : 'lib/underscore',
    'handlebars'   : 'lib/handlebars.runtime'
  }
});