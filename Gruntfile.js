'use strict'

var ngrok = require('ngrok');
module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);
  require('logfile-grunt')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 80,
        pages:['index.html']
      },
      local: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    }
  });

  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 8080;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

  grunt.registerTask('default', ['psi-ngrok']);
};
