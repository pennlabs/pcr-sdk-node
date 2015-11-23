var request = require('request');

const API_HOST = 'http://api.penncoursereview.com/v1/';

class PCR {
  constructor (token) {
    if (!token) {
      token = 'public';
    }
    this.token = token;
  }

  api (endpoint, params, cb) {
    // Optional params argument
    if (typeof params === 'function') {
      cb = params;
      params = {};
    }
    params.token = this.token;

    request({
      url: `${API_HOST}${endpoint}`,
      method: "GET",
      qs: params,
    }, (err, body, response) => {
      var json = JSON.parse(response);
      cb(err, json);
    });
    return;
  }

  course (id_or_url, cb) {
    this.api(`courses/${id_or_url}`, cb);
  }

  department (department_id, cb) {
    this.api(`depts/${department_id}`, cb);
  }

  departments (cb) {
    this.api('depts', cb);
  }

  instructor (id, cb) {
    this.api(`instructors/${id}`, cb);
  }

  instructors (cb) {
    this.api('instructors', cb);
  }

  semesters (cb) {
    this.api('semesters', cb);
  }

  section (course_id, section_id, cb) {
    this.api(`courses/${course_id}/sections/${section_id}`, cb);
  }

  review (course_id, section_id, instructor_id, cb) {
    this.api(`courses/${course_id}/sections/${section_id}/reviews/${instructor_id}`, cb);
  }

  courseHistory (courseHistory_id, cb) {
    this.api(`coursehistories/${courseHistory_id}`, cb);
  }

  courseHistoryReviews (courseHistory_id, cb) {
    this.api(`coursehistories/${courseHistory_id}/reviews`, cb);
  }

  averageReview (course_id, cb) {
    request({
      url: `http://api.pennlabs.org/pcr/${course_id}`,
      method: "GET",
    }, (err, body, response) => {
      var json = JSON.parse(response);
      cb(err, json);
    });
    return;
  }
}

module.exports = PCR;
