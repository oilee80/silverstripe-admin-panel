/*global module:false, require:false */
/**!
* Gruntfile
* Follow README.md to get started
*/
module.exports = function(grunt) {

// Load all grunt tasks.
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// Project configuration.
grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
        files: [
            'Gruntfile.js',
            'js/admin-panel.js'
        ],
        // JSHint options @see http://jshint.com/docs/
        options: {
            browser: true,
            devel: true,
            eqeqeq: false,
            jquery: true,
            smarttabs: true,
            undef: true,
            unused: false,
            globals: {
                Modernizr: false,
                YT: false,
                Util: true,
                App: true
            }
        }
    },

    less: {
        build: {
            files: {
                "css/css.css" : "css/less/css.less"
            },
            options: {
                sourceMap: true,
                sourceMapFilename: "css/css.css.map",
                sourceMapBasepath: "css/"
            }
        },
        min: {
            options: {
                yuicompress: true
            },
            files: {
                "css/css.min.css" : "css/less/css.less"
            }
        }
    },

    karma: {
        options: {
            configFile: 'karma.conf.js'
        },
        unit: {
            browsers: ['Chrome', 'Safari', 'Firefox']
        },
        quickunit: {
            autoWatch: false,
            singleRun: true,
            browsers: ['Chrome']
        },
        continuous: {
            autoWatch: false,
            singleRun: true,
            browsers: ['PhantomJS']
        }
    },

    watch: {
        lint: {
            files: '<%= jshint.files %>',
            tasks: [ 'build:js' ]
        },
        test: {
            files: ['js/test/specs/**/*.js'],
            tasks: ['karma:continuous']
        },
        less: {
            files: ['css/less/css.less', 'css/less/**/*.less'],
            tasks: ['less']
        //  },
        //    // Only for livereload task
        // css: {
        //     options: {
        //         livereload: true
        //     },
        //     files: [ '<%= themePath %>/css/site.css' ],
        //     tasks: []
        }
    },

    concat: {
        options: {
            separator: ';',
            banner: '/*! <%= pkg.description %> - <%= pkg.author %> - Built <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        app: {
            src: [
                'js/admin-panel.js'
            ],
            dest: 'js/build/admin-panel.js'
        }
    }

});


    // Register tasks
    grunt.registerTask('lint', [
        'jshint'
    ]);
    grunt.registerTask('test', [
        'karma:continuous'
    ]);
    grunt.registerTask('test:quick', [
        'karma:quickunit'
    ]);
    grunt.registerTask('test:runner', [
        'karma:unit'
    ]);
    grunt.registerTask('build', [
        'less',
        'jshint',
        'concat'
    ]);
    grunt.registerTask('build:js', [
        'jshint',
        'concat'
    ]);
    grunt.registerTask('build:production', [
        'build',
        'uglify'
    ]);
    grunt.registerTask('default', [
        'build'
    ]);

};
