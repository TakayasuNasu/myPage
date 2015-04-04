var gulp   = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('concat', function () {
  return gulp.src(config.app.js)
  .pipe(concat(config.concat.js))
  .pipe(gulp.dest(config.build.js));
});