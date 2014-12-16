var gulp = require('gulp');
var exec = require('child_process').exec;
var $ = require('gulp-load-plugins')();

gulp.task('test', function(cb){
  exec('mocha --bail "test/**/*.js"', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch', function(){
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['test']);
});
