const createHttpService = require('./fetch-to-http');
const SWAPIService = require('./swapi-service');

const swapiHttp = createHttpService(`https://swapi.co/api`);
const SWAPIResponse = new SWAPIService(swapiHttp);

test("Name should be Luke Skywalker", async () => {
  // expect.assertions(1);
  let serverResponse = await SWAPIResponse.fetchPerson(1);
  expect(serverResponse.status).toEqual(200);
  expect(serverResponse.body.name).toEqual('Luke Skywalker');
});

test("Response should be 200", async () => {
  let serverResponse = await SWAPIResponse.fetchPerson(1);
  expect(serverResponse.status).toEqual(200);
});

