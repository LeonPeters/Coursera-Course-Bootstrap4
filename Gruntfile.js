'use strict'; //use strict javascript code

module.exports = function(grunt) { //how node modules are defined

    //Time how long tasks take (to help optimise building time)
    require('time-grunt')(grunt); //load in the time grunt node module to be used in this particular node module
    
    //Automatically load required Grunt tasks
    require('jit-grunt')(grunt); //will load in any other node modules or grunt plug-ins, when they are implied implicitely within Grunt
    
    //Define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        //watch tasks to keep watch on .scss files in css folder, and automaticall convert them to CSS
        watch: { 
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true, 
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    //This task does the same as previously assigning watch task to watch SCSS files
    grunt.registerTask('css', ['sass']); //task name is CSS, task involves executing the SASS tasks which was already configured. It can be run in CMD with 'grunt css'
    grunt.registerTask('default', ['browserSync', 'watch'])
};