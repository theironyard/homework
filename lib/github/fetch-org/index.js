/*
  A simple module for fetching a github org's user list
*/

var semver = require('semver'),
  _ = require('lodash'),
  github = require('octonode'),
  q = require('q'),
  deferred = q.defer(),
  githubAPI = github.client();

function fetchOrg(orgName){

  githubAPI.get('/orgs/' + orgName + '/members', {}, function (err, status, body, headers) {
    err ? deferred.reject(err) : deferred.resolve(body);
  });

  return deferred.promise;
}

module.exports = fetchOrg;