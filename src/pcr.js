request = require('request');

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
      json = JSON.parse(response);
      if (err) {
        throw err;
      }
      cb(json);
    });
    return;
  }
}

PCR.API_HOST = 'http://api.penncoursereview.com/v1/';
