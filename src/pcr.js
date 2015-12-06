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
      method: 'GET',
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

  department (departmentId, cb) {
    this.api(`depts/${departmentId}`, cb);
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

  section (courseId, sectionId, cb) {
    this.api(`courses/${courseId}/sections/${sectionId}`, cb);
  }

  review (courseId, sectionId, instructorId, cb) {
    this.api(`courses/${courseId}/sections/${sectionId}/reviews/${instructorId}`, cb);
  }

  courseHistory (courseHistoryId, cb) {
    this.api(`coursehistories/${courseHistoryId}`, cb);
  }

  courseHistoryReviews (courseHistoryId, cb) {
    this.api(`coursehistories/${courseHistoryId}/reviews`, cb);
  }

  averageReview (courseId, cb) {
    request({
      url: `http://api.pennlabs.org/pcr/${courseId}`,
      method: 'GET',
    }, (err, body, response) => {
      var json = JSON.parse(response);
      cb(err, json);
    });
    return;
  }
}

module.exports = PCR;
