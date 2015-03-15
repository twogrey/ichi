module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['assets/js/jquery.fitvids.js', 'assets/js/index.js', 'assets/js/foundation.min.js', 'assets/js/overlay/snap.svg-min.js', 'assets/js/overlay/classie.js', 'assets/js/overlay/demo1.js'],
                dest: 'assets/js/built.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'assets/js/min/built.js': ['assets/js/built.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ["concat", "uglify"]);
};
