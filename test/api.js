var assert = require('assert');
var should = require('should');
var PCR = require('../lib/pcr');

var PCR_TOKEN = process.env.PCR_AUTH_TOKEN || '';

describe('PCR', () => {
  var pcr = new PCR(PCR_TOKEN);

  it('should find formal logic using course id', () => {
    pcr.course(2041, (err, json) => {
      assert.equal(json.result.name, 'FORMAL LOGIC II');
      assert.equal(json.result.semester, '2003A');
    });
  });

  it('should find formal logic using course url', () => {
    pcr.course('2003A-PHIL-006', (err, json) => {
      assert.equal(json.result.name, 'FORMAL LOGIC II');
      assert.equal(json.result.semester, '2003A');
    });
  });
});
