const swapiService = (http) => {
  return {
    fetchPerson: (id) => {
      return http.get(id)
    }
  }
};

module.exports = {
  swapiService
};