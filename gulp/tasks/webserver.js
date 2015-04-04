var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var config    = require('../config');

gulp.task('webserver', ['watch'], function() {
  gulp.src(config.app.root)
    .pipe(webserver({
      host: config.host,
      livereload: true
    }));
});