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

  it('should find ASTR department', () => {
    pcr.department('ASTR', (err, json) => {
      assert.equal(json.result.name, 'ASTRONOMY');
    });
  });

  it('should find all departments', () => {
    pcr.departments((err, json) => {
      assert(json.result.values.length > 20);
      assert.equal(json.result.values[0].id, 'AAMW');
    });
  });

  it('should find all instructors', () => {
    pcr.instructors((err, json) => {
      assert(json.result.values.length > 20);
      assert.equal(json.result.values[0].id, '1-JACK-TOPIOL');
    });
  });

  it('should find a given instructor with int id', () => {
    pcr.instructor(1, (err, json) => {
      assert.equal(json.result.id, '1-JACK-TOPIOL');
      assert.equal(json.result.reviews.values.length, 6);
    });
  });

  it('should find a given instructor with a long id', () => {
    pcr.instructor('1-JACK-TOPIOL', (err, json) => {
      assert.equal(json.result.id, '1-JACK-TOPIOL');
      assert.equal(json.result.reviews.values.length, 6);
    });
  });

  it('should find a given instructor with a long id (Kearns)', () => {
    pcr.instructor('1356-MICHAEL-KEARNS', (err, json) => {
      assert.equal(json.result.first_name, 'MICHAEL J.');
    });
  });

  it('should find all semesters', () => {
    pcr.semesters((err, json) => {
      assert(json.result.values.length > 10);
      assert.equal(json.result.values[0].id, '2002A');
    });
  });

  it('should find a specific class section based on int ids', () => {
    pcr.section(2795, 401, (err, json) => {
      assert.equal(json.result.name, 'INTRO COGNITIVE SCIENCE');
    });
  });

  it('should find a specific class review based on int ids', () => {
    pcr.review(24765, '001', '1356-MICHAEL-KEARNS', (err, json) => {
      assert.equal(json.result.num_students, 88);
    });
  });

  it ('should find coursehistory based on id', () => {
    pcr.courseHistory(177, (err, json) => {
      assert.equal(json.result.aliases[0], 'ASTR-150');
    });
  });

  it ('should find coursehistory based on alias', () => {
    pcr.courseHistory('ASTR-150', (err, json) => {
      assert.equal(json.result.aliases[0], 'ASTR-150');
    });
  });
});
