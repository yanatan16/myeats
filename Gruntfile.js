module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    lint: {
      all: ['grunt.js', 'lib/**/*.js', 'app/**/*.js', 'public/js/**/*.js'],
      test: {}
    },

    jshint: {
      options: {
        browser: true
      }
    },

    clean: {
      requirejs: [ "public/js-min" ]
    },

    handlebars: {
      compile: {
        options: {
          amd: true, 
          namespace: false
        },
        files: {
          "public/js/templates/restaurant/list.js": "app/views/client/restaurant/list.hbs",
          "public/js/templates/restaurant/new.js": "app/views/client/restaurant/new.hbs",
          "public/js/templates/notifier.js": "app/views/client/notifier.hbs"
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          appDir: "",
          dir: "public/js-min",
          modules: [
              {
                  name: "app/app"
              }
          ],
          baseUrl: "public/js",
          mainConfigFile: "public/js/main.js",
          // out: "public/js/build/full.min.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-handlebars'); // Later version than grunt-contrib
  grunt.loadNpmTasks('grunt-contrib-clean'); // Earlier version than grunt-contrib


  grunt.registerTask('build', ['clean', 'handlebars',  'requirejs'])

  // By default, lint and run all tests.
  grunt.registerTask('default', 'lint test');

};
