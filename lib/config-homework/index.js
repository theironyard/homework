var path = require('path');
var gulp = require('gulp');
var fileDir = process.cwd();
var $ = require('gulp-load-plugins')();

module.exports = function(data) {
  
  gulp.task('assignJSON', function(){
    var str = JSON.stringify(data, null, 4);
    //process.chdir("~")
    //console.log("current dir after change is ", )
    return $.file('.homeworkrc', str, {src: true})
      .pipe($.conflict(process.cwd(), {logger: console.log.bind(console)}))
      //.pipe(gulp.dest(process.cwd()));
      .pipe(gulp.dest(process.env.HOME));
  });
  //process.chdir(fileDir)
  gulp.start('assignJSON');
};

// module.exports = function(data) {
//   return console.log( JSON.stringify(data, null, "  ") );
// }