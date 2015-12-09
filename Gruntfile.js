'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    mochaWebdriver: {
      options: {
        timeout: 1000 * 60 * 3
      },
      phantom: {
        src: ['test/spec/simpleTest.js'],
        options: {
          testName: 'phantom test',
          usePhantom: true,
          phantomPort: 5555,
          reporter: 'spec'
        }
      },
      selenium: {
        src: ['test/sanity.js'],
        options: {
          testName: 'selenium test',
          concurrency: 2,
          hostname: '127.0.0.1',
          port:   '4444',
          autoInstall: true,
          browsers: [
            {browserName: 'firefox'},
            // {browserName: 'internet explorer', platform: 'Windows 8', version: '11'},
            {browserName: 'chrome'}
          ]
        }
      },
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('test', [ 'mochaWebdriver:phantom' ]);

};
