var semver = require('semver');
var _ = require('lodash');

function validate(data){

}

validate.validateName = function(name){
  var input = name || "";
  var validations = [
    {
      isValid: function(){
        return input.length;
      },
      error: 'name length must be greater than zero'
    },
    {
      isValid: function(){
        return !input.match(/^\./);
      },
      error: 'name cannot start with a period'
    },
    {
      isValid: function(){
        return !input.match(/^_/);
      },
      error: 'name cannot start with an underscore'
    },
    {
      isValid: function(){
        return !(input.match(/^\s/) || input.match(/\s$/));
      },
      error: 'name cannot contain leading or trailing spaces'
    },
    {
      isValid: function(){
        return !input.match(/[:\s\/]/);
      },
      error: 'name can only contain URL-friendly characters'
    },
    {
      isValid: function(){
        return input === input.toLowerCase();
      },
      error: 'name must be lowercase'
    }
  ];

  var errors = _.chain(validations)
    .map(function(v){
      return v.isValid() ? null : v.error;
    })
    .compact()
    .value();

  return errors.length ? {valid: false, errors: errors} : {valid: true};
};

validate.validateVersion = function(version) {
  var input = version || "";
  var validations = [
    {
      isValid: function(){
        return semver.valid(input);
      },
      error: 'version must be a valid semver'
    },
  ];

  var errors = _.chain(validations)
    .map(function(v){
      return v.isValid() ? null : v.error;
    })
    .compact()
    .value();

  return errors.length ? {valid: false, errors: errors} : {valid: true};
};

validate.validateTitle = function(title){
  var input = title || "";
  var validations = [
    {
      isValid: function(){
        return input.length;
      },
      error: 'title length must be greater than zero'
    }
  ];

  var errors = _.chain(validations)
    .map(function(v){
      return v.isValid() ? null : v.error;
    })
    .compact()
    .value();

  return errors.length ? {valid: false, errors: errors} : {valid: true};
};

validate.validateDescription = function(description){
  var input = description || "";
  var validations = [
    {
      isValid: function(){
        return input.length;
      },
      error: 'description length must be greater than zero'
    }
  ];

  var errors = _.chain(validations)
    .map(function(v){
      return v.isValid() ? null : v.error;
    })
    .compact()
    .value();

  return errors.length ? {valid: false, errors: errors} : {valid: true};
};

validate.validateKeywords = function(keywords){
  var input = keywords || [];
  var validations = [
    {
      isValid: function(){
        return input.length;
      },
      error: 'keywords length must be greater than zero'
    },
    {
      isValid: function(){
        return _.isArray(input);
      },
      error: 'keywords must be an array'
    },
  ];

  var errors = _.chain(validations)
    .map(function(v){
      return v.isValid() ? null : v.error;
    })
    .compact()
    .value();

  return errors.length ? {valid: false, errors: errors} : {valid: true};
};

validate.toArray = function(input){
  if(!input || !_.isString(input)) return [];
  return input.split(/[\s,]+/);
};

module.exports = validate;
