var path = require('path');
var gulp = require('gulp');
var merge = require('merge-stream');
var $ = require('gulp-load-plugins')();
var config = require('../config');

module.exports = function(data){

  gulp.task('initHomework', function(){
    var readme = gulp.src([
        path.join(config.get('homeworkTemplate'), 'README.md.handlebars')
      ])
      .pipe($.compileHandlebars(data))
      .pipe($.rename('README.md'))
      // .pipe($.conflict(process.cwd()))
      .pipe(gulp.dest(process.cwd()));

    var str = JSON.stringify(data, null, 4);
    var json = $.file('.homework.json', str, {src: true})
      // .pipe($.conflict(process.cwd()))
      .pipe(gulp.dest(process.cwd()));

    return merge([readme, json]);
  });

  gulp.start('initHomework');
};
