var restler = require('restler');

// this should centralized
var assignmentEndpoint = function (cohortId){
  return "http://private-b02a7b-homeworkmockapi.apiary-mock.com/cohorts/" + cohortId + "/assignments/" + id;
}

// this should centralized
var nextAssignmentEndpoint = function (cohortId){
  return "http://private-b02a7b-homeworkmockapi.apiary-mock.com/cohorts/" + cohortId + "/assignments/next";
}

var command = {

  // Run this and provide a cohort id if you'd like to not have to specify
  // it everytime you use `get` or `next`. Optional. 
  setup: function(cohortId){
    this.cohort = cohortId;
  },

  get: function(id, cohortId){
    var response = restler.get(assignmentEndpoint((cohortId || this.cohort), id))
    return response
  },

  next: function(cohortId){
    var response = restler.get(nextAssignmentEndpoint((cohortId || this.cohort)))
    return response
  }

}

module.exports = command;
