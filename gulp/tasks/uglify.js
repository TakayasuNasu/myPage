var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../config');

gulp.task('uglify', ['concat'], function() {
  return gulp.src(config.minify.js)
    .pipe(uglify())
    .pipe(gulp.dest(config.build.js));
});