const request = require('request-promise');

module.exports = url => ({
  get: id => request({
    uri: `${url}/${id}`,
    json: true
  })
})