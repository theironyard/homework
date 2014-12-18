var path = require('path');
var gulp = require('gulp');
var _ = require('lodash');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var normalize = require('../normalize-homework-data');

module.exports = function(data){

  gulp.task('initREADME', function(){
    return gulp.src([
        path.join(config.get('homeworkTemplates'), data.readmeTemplate.toLowerCase().replace(' ','-') + '.README.md.handlebars')
      ])
      .pipe($.compileHandlebars(data, {
        batch: [path.join(config.get('homeworkTemplates'), 'partials')]
      }))
      .pipe($.rename('README.md'))
      .pipe($.conflict(process.cwd(), {logger: console.log.bind(console)}))
      .pipe(gulp.dest(process.cwd()));
  });

  gulp.task('initJSON', ['initREADME'], function(){
    var str = JSON.stringify(normalize(data), null, 4);
    return $.file('.homework.json', str, {src: true})
      .pipe($.conflict(process.cwd(), {logger: console.log.bind(console)}))
      .pipe(gulp.dest(process.cwd()));
  });

  gulp.start('initJSON');
};
