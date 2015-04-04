var gulp   = require( 'gulp' );
var config = require('../config');

gulp.task('copy', function() {
    gulp.src(config.app.bower)
      .pipe(gulp.dest(config.build.bower));
});