
const gulp = require('gulp');
const sass = require('gulp-sass');
//const bs = require('browser-sync').create();
/*
require('./gulp/styles')(gulp, config, bs);
require('./gulp/scripts')(gulp, config, bs);
require('./gulp/svg')(gulp, config, bs);
require('./gulp/stats')(gulp, config, bs);
require('./gulp/watch')(gulp, config, bs);
require('./gulp/lint')(gulp, config);
require('./gulp/default')(gulp, config);
*/

gulp.task('sass', function() {
    return gulp.src('sass/global.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))

});
