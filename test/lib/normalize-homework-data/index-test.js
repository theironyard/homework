var expect = require('chai').expect;
var normalize = require('../../../lib/normalize-homework-data');

describe.only('normalize-homework-data', function(){
  it('should not contain readmeTemplate', function(){
    var fixture = { readmeTemplate: 'Cool' };
    expect(normalize(fixture)).to.not.have.property('readmeTemplate');
  });

  it('readmeTemplate should be added to keywords', function(){
    var fixture = {
      readmeTemplate: 'Cool',
      keywords: ['Awesome']
    };
    expect(normalize(fixture).keywords).to.contain('Cool');
  });

  it('readmeTemplate should be uniquely added to keywords', function(){
    var fixture = {
      readmeTemplate: 'Cool',
      keywords: ['Awesome', 'Cool']
    };
    expect(normalize(fixture).keywords).to.deep.equal(['Awesome', 'Cool']);
  });
});
