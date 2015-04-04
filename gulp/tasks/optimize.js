var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var config   = require('../config');

gulp.task('optimize', function () {
  return gulp.src(config.app.images)
  .pipe(imagemin({
    progressive: true,
    use: [
    pngquant({
      quality: '65-80',
      speed: 1
    })
    ]
  }))
  .pipe(gulp.dest(config.build.images));
});