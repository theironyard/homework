/*
A simple module for fetching a github org's user list
*/

var semver = require('semver'),
  _ = require('lodash'),
  github = require('octonode'),
  spinner = require('node-spinner'),
  q = require('q'),
  deferred = q.defer(),
  client = github.client(),
  ui,
  spinnerAnimation;

function fetchOrg(orgName, inquirerInstance){
  ui = new inquirerInstance.ui.BottomBar();
  startSpinner();
  console.log('gonna fetch', '/orgs/' + orgName + '/members')
  client.get('/orgs/' + orgName + '/members', {}, function (err, status, body, headers) {
    err ? deferred.reject(err) : deferred.resolve(body);
    stopSpinner();
  });

  return deferred.promise;
}

function startSpinner () {
  spinnerAnimation = setInterval(function(){
    ui.updateBottomBar('Fetching organization... ' + spinner().next() + '\n');
  }, 50);
}

function stopSpinner () {
  clearInterval(spinnerAnimation);
  ui.updateBottomBar('' + '\n');
}

module.exports = fetchOrg;