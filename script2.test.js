const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    done();
  });
});

it("calls swapi to get people with promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

// it("getPeople returns count and results", () => {});
