
/* eslint-disable no-unused-vars */
var BASE_URL;
const URL = window.location.href;
const _local = String(URL).includes('localhost');

if (_local) {
  BASE_URL = "http://localhost:3001/api";
}
else {
  BASE_URL = "PRODUCTION_URL";
}

export const graph  = `${BASE_URL}/graphql`;
