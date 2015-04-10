var gulp           = require('gulp');
var inject         = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var files          = mainBowerFiles();
var config         = require('../config');

files.push(config.app.css);
files.push(config.app.appJs);
files.push(config.app.js);

gulp.task('inject', ['sass'], function () {

  var target  = gulp.src(config.target);
  var sources = gulp.src(files, {read: false});

  return target.pipe(inject(sources, {ignorePath: 'app'}))
  .pipe(gulp.dest(config.app.root));
});