var gulp    = require('gulp');
var karma   = require('gulp-karma');
var mbFiles = require('main-bower-files');
var config  = require('../config');

var files   = mbFiles({
  includeDev: true,
  filter: "**/*.js"
});

files.push(config.app.appJs);
files.push(config.app.js);
files.push(config.app.spec);

gulp.task('karma', function () {
    gulp.src(files)
      .pipe(karma({configFile: config.root.karma}));
});