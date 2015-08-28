module.exports = function(grunt) {
  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      // HERE WE COMPILE SASS
      sass: {
        dist: {
          options: {
            outputStyle: 'expanded',
            sourceMap: true
          },
          files: {
            'public/css/app.css': 'scss/app.scss'
          }
        }
      },

      cssmin: {
        combine: {
          files: {
            'public/css/app.css': ['public/css/app.css']
          }
        }
      },

      concat: {
        // 2. Configuration for concatinating files goes here.
        js: {
          src: [
            'js_dev/libs/*.js',
            'js_dev/development.js'  // This specific file
          ],

          dest: 'public/js/temp/production.build.js'
        },

        // HERE WE ATTACH THE MUST-GO-MESSAGE FROM WORDPRESS
        css: {
          src: [
            'scss/base/message.css',
            'public/css/app.css'
          ],

          dest: 'public/css/app.min.css'
        }
      },


      uglify: {
        build: {
          src: 'public/js/temp/production.build.js',
          dest: 'public/js/app.min.js'
        }
      },

      watch: {
        options: {
          livereload: true,
        },
        scripts: {
          files: [
            'js_dev/libs/*.js',
            'js_dev/*.js'
          ],

          tasks: [
            'concat',
            'uglify'
          ],
          options: {
            spawn: false,
          }
        },

        css: {
          files: [
            'scss/*.scss',
            'scss/**/*.scss',
            'scss/**/**/*.scss'
          ],
          tasks: ['sass', 'concat'],
          options: {
            spawn: false,
          }
        },

        // html: {
        //   files: ['*.markdown', '**/*.markdown']
        // }
      },
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  require('load-grunt-tasks')(grunt);

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['sass', 'concat', 'uglify' ]);
  grunt.registerTask('prod', ['sass', 'cssmin', 'concat', 'uglify']);

  grunt.registerTask('dev', ['watch']);

};
