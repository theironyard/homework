/* 
  When giving Inquirer an array of objects, the formatting
  is way gross. Instead, pick a property you'd like to be
  displayed in the list, and the object that you'd like it
  represent. 

  This fn creates an array of new objects where those are 
  `name` and  `value`, respectively. 

  Provide the array as the first arg, and the property 
  you'd like to use for `name` as the second arg.
*/

var _ = require('lodash');

module.exports = function(list, name){
  return _.map(list, function (item) {
    return {
      name: item[name],
      value: item
    }
  })
};
