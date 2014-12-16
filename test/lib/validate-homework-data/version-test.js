var expect = require('chai').expect;
var validate = require('../../../lib/validate-homework-data');

describe('validate-homework-data', function(){
  describe('.validateVersion', function(){
    it('invalid semver', function(){
      expect(validate.validateVersion('cool')).to.not.be.ok();
    });

    it('valid semver', function(){
      expect(validate.validateVersion('1.0.0')).to.be.ok();
    });
  });
});
