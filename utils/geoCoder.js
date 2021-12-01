const NodeGeocoder = require('node-geocoder');
const dotenv = require('dotenv');

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: 'u9dXAaeSe4QQAM4PGkau031Wolj4HKUM', 
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;