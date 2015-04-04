var gulp      = require('gulp');
var concatCss = require('gulp-concat-css');
var config    = require('../config');

gulp.task('concat-css', ['sass'], function () {
  return gulp.src(config.app.css)
  .pipe(concatCss(config.concat.css))
  .pipe(gulp.dest(config.build.css));
});