var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function(data) {
  
  gulp.task('assignJSON', function(){
    var str = JSON.stringify(data, null, 4);
    return $.file('.homeworkrc/.config.json', str, {src: true})
      .pipe($.conflict(process.cwd(), {logger: console.log.bind(console)}))
      .pipe(gulp.dest(process.cwd()));
  });

  gulp.start('assignJSON');
};

// module.exports = function(data) {
//   return console.log( JSON.stringify(data, null, "  ") );
// }