var gulp      = require('gulp');
var minifyCSS = require('gulp-minify-css');
var config    = require('../config');

gulp.task('minify-css', ['concat-css'], function() {
  return gulp.src(config.minify.css)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(config.build.css));
});