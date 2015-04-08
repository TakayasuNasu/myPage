var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['inject'], function () {
  var watcher = gulp.watch([
    config.target,
    config.app.js,
    config.app.views,
    config.app.scss,
    'bower.json'
    ], ['inject']);

  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});