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
}

module.exports = PCR;
