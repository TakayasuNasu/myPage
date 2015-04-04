var gulp   = require('gulp');
var sass   = require('gulp-sass');
var config = require('../config');

gulp.task('sass', function () {
  return gulp.src(config.app.scss)
    .pipe(sass())
    .pipe(gulp.dest(config.app.dest.css));
});