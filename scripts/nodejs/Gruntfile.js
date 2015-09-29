var _ = require('underscore');

module.exports = function(grunt) {
  grunt.initConfig({
    deadlink: {
        options: {
            logAll: true
      },
      target: {
        src: [ "../../*.md" ] // glob pattern. files path that include links to checking.
      },
    },
  });
  grunt.loadNpmTasks('grunt-deadlink');
  grunt.registerTask('test', ['deadlink:target']);
}

