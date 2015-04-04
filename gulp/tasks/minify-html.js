var gulp       = require('gulp');
var minifyHTML = require('gulp-minify-html');
var config     = require('../config');

gulp.task('minify-html', function() {
  return gulp.src([config.app.views, config.app.ignore.views])
    .pipe(minifyHTML({conditionals: true,spare:true}))
    .pipe(gulp.dest(config.build.views));
});