var expect = require('chai').expect;
var validate = require('../../../lib/validate-homework-data');

describe('validate-homework-data', function(){
  describe('.validateTitle', function(){
    it("valid", function(){
      expect(validate.validateTitle("cool")).to.deep.equal({
        valid: true
      });
    });

    it("empty string", function(){
      expect(validate.validateTitle("")).to.deep.equal({
        valid: false,
        errors: ["title length must be greater than zero"]
      });
    });
  });
});
