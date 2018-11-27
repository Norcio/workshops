class SWAPIService {
  constructor(http) {
    this.http = http;
  }

  fetchPerson(id) {
    return this.http.get(`people/${id}`);
  }

  fetchShip(id) {
    return this.http.get(`starships/${id}`);
  }

  fetchPlanet(id) {
    return this.http.get(`planets/${id}`);
  }
}

module.exports = SWAPIService;