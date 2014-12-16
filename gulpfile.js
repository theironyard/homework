var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('test', function(){
  return gulp.src('test/**/*-test.js', {read: false})
    .pipe($.exec('mocha <%= file.path %>', {
      continueOnError: true
    }))
    .pipe($.exec.reporter({
      err: false
    }));
});

gulp.task('watch', function(){
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['test']);
});
