var request = require('request');

request({
  uri: 'https://www.parsehub.com/api/v2/runs/t64TM1uf4VVO/data',
  method: 'GET',
  gzip: true,
  qs: {
    api_key: "tnA3rUBGCd_r",
    format: "JSON"
  }
}, function(err, resp, body) {
  console.log(body);
});

