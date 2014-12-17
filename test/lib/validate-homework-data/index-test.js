var expect = require('chai').expect;
var validate = require('../../../lib/validate-homework-data');

describe('validate-homework-data', function(){
  describe('validate', function(){
    it('should validate name');
    it('should validate version');
    it('should validate title');
    it('should validate description');
    it('should validate keywords');
  });

  describe('.toArray', function(){
    it('should be comma separated', function(){
      expect(validate.toArray('one,two, three, forty two')).to.deep.equal([
        'one',
        'two',
        'three',
        'forty two'
      ]);
    });

    it('should return an empty array for an empty string', function(){
      expect(validate.toArray('')).to.deep.equal([]);
    });
  });
});
