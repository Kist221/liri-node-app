console.log('this is loaded');

// TWITTER
var Twitter = require('twitter');
var twitter = new Twitter({
	consumer_key: 'q83Sm6EHpg5WnxF9vyCih67iG',
	consumer_secret: 'I52FspZ1iCptTvFrRXqLqDBOXDRaFZw9Qn0f3WnPSo8WYkMBXB',
	access_token_key: '22227235-dLXGClAF0tYluRd7Fw9z7meoFqyAvSkgL0nrSnGOZ',
	access_token_secret: 'VJJGWpcg96WWQzdcnXpINC35eH75MJ6yEVzZlUQR07WFZ',
});

// SPOTIFY
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: "e6ff397bb9ce4dd58db34dd07b18af3b",
  secret: "32b5bf92d490447dae87c7e11071b755"
});

// OMDB
var request = require("request");

// EXPORT
module.exports = {
	twitter: twitter,
	spotify: spotify
};