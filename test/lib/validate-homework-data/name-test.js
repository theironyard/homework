var expect = require('chai').expect;
var validate = require('../../../lib/validate-homework-data');

describe('validate-homework-data', function(){
  describe('.validateName', function(){
    it("valid", function(){
      expect(validate.validateName("cool")).to.deep.equal({
        valid: true
      });
    });

    it("empty string", function(){
      expect(validate.validateName("")).to.deep.equal({
        valid: false,
        errors: ["name length must be greater than zero"]
      });
    });

    it(".start-with-period", function(){
      expect(validate.validateName(".start-with-period")).to.deep.equal({
        valid: false,
        errors: ["name cannot start with a period"]
      });
    });

    it("_start-with-underscore", function(){
      expect(validate.validateName("_start-with-underscore")).to.deep.equal({
        valid: false,
        errors: ["name cannot start with an underscore"]
      });
    });

    it("contain:colons", function(){
      expect(validate.validateName("contain:colons")).to.deep.equal({
        valid: false,
        errors: ["name can only contain URL-friendly characters"]
      });
    });

    it(" leading-space", function(){
      expect(validate.validateName(" leading-space")).to.deep.equal({
        valid: false,
        errors: ["name cannot contain leading or trailing spaces", "name can only contain URL-friendly characters"]
      });
    });

    it("trailing-space ", function(){
      expect(validate.validateName("trailing-space ")).to.deep.equal({
        valid: false,
        errors: ["name cannot contain leading or trailing spaces", "name can only contain URL-friendly characters"]
      });
    });

    it("s/l/a/s/h/e/s", function(){
      expect(validate.validateName("s/l/a/s/h/e/s")).to.deep.equal({
        valid: false,
        errors: ["name can only contain URL-friendly characters"]
      });
    });

    it("CAPITAL-LETTERS", function(){
      expect(validate.validateName("CAPITAL-LETTERS")).to.deep.equal({
        valid: false,
        errors: ["name must be lowercase"]
      });
    });
  });
});
