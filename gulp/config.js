var root  = './';
var app   = './app';
var build = './build';

module.exports = {

  root: {
    root: root,
    bower: root + 'bower_components/**/*.*'
  },

  app: {
    root:   app,
    css:    app + '/css/*.css',
    scss:   app + '/scss/*.scss',
    appJs:  app + '/js/app.js',
    js:     app + '/js/**/*.js',
    images: app + '/images/**/*.{jpg,JPG,png,PNG,gif,GIF}',
    views:  app + '/views/**/*.html',
    bower:  app + '/bower_components/**/*.*',
    dest: {
      css: app + '/css'
    },

    ignore: {
      views: '!' + app + '/views/index.html'
    }
  },

  build: {
    css:    build + '/css',
    js:     build + '/js',
    images: build + '/images',
    views:  build + '/views',
    bower:  build + '/bower_components',
    root:   build
  },

  minify: {
    js:  build + '/js/*.js',
    css: build + '/css/*.css'
  },

  concat: {
    css: 'app.min.css',
    js:  'app.min.js'
  },

  target: app + '/views/index.html',

  host: '192.168.33.33'
};