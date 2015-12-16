'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    mochaWebdriver: {
      options: {
        timeout: 1000 * 60 * 3
      },
      phantom: {
        src: ['test/spec/*.js'],
        options: {
          testName: 'phantom test',
          usePhantom: true,
          phantomPort: 5555,
          usePromises: true,
          reporter: 'spec'
        }
      },
      selenium: {
        src: ['test/spec/*.js'],
        options: {
          testName: 'selenium test',
          concurrency: 2,
          hostname: '127.0.0.1',
          port:   '4444',
          autoInstall: true,
          browsers: [
            {browserName: 'chrome'}
          ]
        }
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('test', ['mochaWebdriver:phantom']);

  grunt.registerTask('testSelenium', ['mochaWebdriver:selenium']);
  grunt.registerTask('default', ['jshint', 'test']);
};
