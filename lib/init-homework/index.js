var path = require('path');
var gulp = require('gulp');
var _ = require('lodash');
var merge = require('merge-stream');
var $ = require('gulp-load-plugins')();
var config = require('../config');

module.exports = function(data){

  gulp.task('initHomework', function(){
    var readme = gulp.src([
        path.join(config.get('homeworkTemplates'), data.readmeTemplate.toLowerCase().replace(' ','-') + '.README.md.handlebars')
      ])
      .pipe($.compileHandlebars(data, {
        batch: [path.join(config.get('homeworkTemplates'), 'partials')]
      }))
      .pipe($.rename('README.md'))
      .pipe($.conflict(process.cwd()))
      .pipe(gulp.dest(process.cwd()));

    var str = JSON.stringify(_.omit(data, 'readmeTemplate'), null, 4);
    var json = $.file('.homework.json', str, {src: true})
      .pipe($.conflict(process.cwd()))
      .pipe(gulp.dest(process.cwd()));

    return merge([readme, json]);
  });

  gulp.start('initHomework');
};
