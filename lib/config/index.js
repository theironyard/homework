var path = require('path');

var config = {
  homeworkTemplate: path.join(process.env._HOMEWORK_ROOT, 'share/homework/template')
};

module.exports = {
  get: function(key){
    return config[key];
  }
};
