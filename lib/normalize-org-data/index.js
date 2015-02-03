/* 
  When fetching a GitHub org, you generally only need
  the username and id. Use this function to do so.
*/

var _ = require('lodash');

module.exports = function(org){
  return _.map(org, function (member) {
    return _.pick(member, ['login', 'id'])
  });
};
