var expect = require('chai').expect;
var validate = require('../../../lib/validate-homework-data');

describe('validate-homework-data', function(){
  describe('.validateVersion', function(){
    it('invalid semver', function(){
      expect(validate.validateVersion('cool')).to.deep.equal({
        valid: false,
        errors: ['version must be a valid semver']
      });
    });

    it('valid semver', function(){
      expect(validate.validateVersion('1.0.0')).to.be.ok();
      expect(validate.validateVersion('1.0.0')).to.deep.equal({
        valid: true
      });
    });
  });
});
