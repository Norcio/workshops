const SWAPIService = require('./swapi-service');
const createHttpService = require('./fetch-to-http');

const swapiHttp = createHttpService(`https://swapi.co/api`);

const swapi = new SWAPIService(swapiHttp);


swapi.fetchShip(9);

swapi.fetchPerson(1);

swapi.fetchPlanet(3);