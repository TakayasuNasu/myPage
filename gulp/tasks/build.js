var gulp           = require('gulp');
var inject         = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var files          = mainBowerFiles();
var webserver      = require('gulp-webserver');
var config         = require('../config');

gulp.task('build', ['uglify', 'minify-css', 'minify-html', 'copy', 'optimize'], function () {

  var target   = gulp.src(config.target);
  var sources  = gulp.src(files, {read: false});
  var minifys = gulp.src([
    config.minify.js,
    config.minify.css
    ], {read: false});

  gulp.src(config.build.root)
    .pipe(webserver({
      host: config.host,
      livereload: true
    }));

  return target.pipe(inject(sources, {name: 'bower',ignorePath: 'app'}))
    .pipe(inject(minifys, {ignorePath: 'build'}))
    .pipe(gulp.dest(config.build.root));
});