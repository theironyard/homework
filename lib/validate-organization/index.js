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
      error: 'organization name length must be greater than zero'
    },
    {
      isValid: function(){
        return input.match(/[\w-]*/)[0].length == input.length;
      },
      error: 'organization name can only contain alphanumeric characters, undercores, and dashes'
    },
    {
      isValid: function(){
        return !input.match(/^[_-]/);
      },
      error: 'name cannot start with an underscore or dash'
    },
    {
      isValid: function(){
        return !(input.match(/^\s/) || input.match(/\s$/));
      },
      error: 'name cannot contain leading or trailing spaces'
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

module.exports = validate;
