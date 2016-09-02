module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            oozaru: {
                files: {
                    'scripts/oozaru.js': [ 
                                            'views/**/*.js',
                                            'scripts/application/app.js']
                }
            }
        },
        compass: {
            // dist: {
            //     options: {
            //         environment:'development',
            //         sassDir: 'Content/sass',
            //         cssDir: 'Content/css/min',
            //         outputStyle:'compressed',
            //         imagesDir:'/content/images'
            //     }
            // },

            dev: {
                options: {
                    environment: 'development',
                    sassDir: 'Content/sass',
                    cssDir: 'Content/css',
                    outputStyle: 'expanded',
                    imagesDir: '/content/images'
                }
            }
        },

        watch: {
            options: {
                spawn: false
            },
            css: {
                files: '/content/sass/*.scss',
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            },

            js: {
                files: ['views/**/*.js', 'scripts/**/*.js', '!Scripts/oozaru.js', '!Scripts/Gruntfile.js'],
                tasks: ['uglify']
            }

        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // register at least this one task
    grunt.registerTask('default', ['watch']);
};