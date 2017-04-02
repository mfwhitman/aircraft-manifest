import config from './config.js';

export const queryAircraftList = (callback) => {
  const url = `${config.apiEndpoint.URL}`;

  fetch(url).then(function(response) {
    callback(response.json())
  })
}

export const dummyAircraftList = (callback) => {
  const dummyResponse = `[{"id":1,"tail":"LX-GLD","name":"Falcon 900EX EASy"},{"id":2,"tail":"LY-ZAB","name":"Challenger 850"},{"id":3,"tail":"9H-MAJ","name":"Challenger 604"},{"id":4,"tail":"S5-JVA","name":"Gulfstream G450"},{"id":5,"tail":"HB-JOE","name":"Gulfstream G550"}]`
  callback(dummyResponse.json())
}