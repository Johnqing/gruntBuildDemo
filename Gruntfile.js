module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            js: {
                src: 'js/init/*.js',
                dest: 'dest/x.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};