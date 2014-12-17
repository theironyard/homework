var path = require('path');

var config = {
  homeworkTemplates: path.join(process.env._HOMEWORK_ROOT, 'share/homework/templates')
};

module.exports = {
  get: function(key){
    return config[key];
  }
};
