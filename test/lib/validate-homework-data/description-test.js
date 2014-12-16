var expect = require('chai').expect;
var validate = require('../../../lib/validate-homework-data');

describe('validate-homework-data', function(){
  describe('.validateDescription', function(){
    it("valid", function(){
      expect(validate.validateDescription("cool")).to.deep.equal({
        valid: true
      });
    });

    it("empty string", function(){
      expect(validate.validateDescription("")).to.deep.equal({
        valid: false,
        errors: ["description length must be greater than zero"]
      });
    });
  });
});
