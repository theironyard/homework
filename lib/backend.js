var url = require('url');
var rest = require('rest');
var mime = require('rest/interceptor/mime');
var client = rest.wrap(mime, { mime: 'application/json' });

var baseURL = 'http://secret-chamber-1537.herokuapp.com/collections';
var assignmentsPath = baseURL + '/assignments/';

module.exports = (function(){
  return {
    assignments: {
      index: function(){
        return client({ path: assignmentsPath }).then(extractEntity);
      },

      create: function(data){
        return client({ path: assignmentsPath, entity: data }).then(extractEntity);
      },

      show: function(id) {
        return client({ path: assignmentsPath + id }).then(extractEntity);
      },

      update: function(id, data) {
        return client({ path: assignmentsPath + id, method: "PUT", entity: data }).then(extractEntity);
      },

      destroy: function(id) {
        return client({ path: assignmentsPath + id, method: 'DELETE' }).then(extractEntity);
      }
    }
  };
})();

function extractEntity(res) {
  return res.entity;
}
