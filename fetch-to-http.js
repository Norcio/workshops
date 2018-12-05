const fetch = require('node-fetch')

module.exports = url => ({
    get: id =>  fetch(`${url}/${id}`)
      .then(res => {
        return res.json().then(data => {
          // console.log(data);
          return {
            body: data,
            status: res.status,
          }
        }
      )
      })
});