var _ = require('lodash');

module.exports = function(data){
  var keywords = _(data.keywords)
    .toArray()
    .push(data.readmeTemplate)
    .uniq()
    .compact()
    .sort()
    .value();

  return _(data)
    .omit('readmeTemplate')
    .tap(function(d){ d.keywords = keywords; })
    .value();
};
