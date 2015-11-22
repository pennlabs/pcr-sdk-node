var PCR = require('./pcr');
var PCR_TOKEN = process.env.PCR_AUTH_TOKEN || 'public';
var pcr = new PCR(PCR_TOKEN);

var averageReviews = (courseAlias, cb) => {
  pcr.courseHistoryReviews(courseAlias, (err, json) => {
    console.log(json.result);
  });
};

averageReviews('ASTR-150');
