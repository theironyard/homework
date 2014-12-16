var expect = require('chai').expect;
var validate = require('../../../lib/validate-homework-data');

describe('validate-homework-data', function(){
  describe('.validateKeywords', function(){
    it("valid", function(){
      expect(validate.validateKeywords(["cool"])).to.deep.equal({
        valid: true
      });
    });

    it("must be an array", function(){
      expect(validate.validateKeywords("a string")).to.deep.equal({
        valid: false,
        errors: ["keywords must be an array"]
      });
    });

    it("empty", function(){
      expect(validate.validateKeywords([])).to.deep.equal({
        valid: false,
        errors: ["keywords length must be greater than zero"]
      });
    });
  });
});
