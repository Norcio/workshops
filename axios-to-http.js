const axios = require('axios');

module.exports = url => ({
  get: id => axios.get(`${url}/${id}`)
})
