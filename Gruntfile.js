module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: { // Target
                options: { // Target options
                    sassDir: 'assets/scss',
                    cssDir: 'assets/css',
                    outputStyle: 'compressed'
                }
            }
        },
        jshint: {
            all: ['assets/js/index.js']
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['assets/js/jquery.js', 'assets/js/*.js'],
                dest: 'assets/js/dest/built.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'assets/js/dest/built.min.js': ['assets/js/dest/built.js']
                }
            }
        },
        watch: {
            compassConfig: {
                files: ['assets/scss/*.scss'],
                tasks: ['compass']
            },
            jsConfig: {
                files: ['assets/js/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            grunt: {
                files: ["Gruntfile.js"],
                tasks: ["default"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'watch');
};
