// import keys
var keys = require("./keys.js");

// seperate API keys
var spotify = keys.spotify;

// function to search for track
var spotifySearch = function(query) {
	// query to find track - input needs to be strings
	spotify.search({ type: 'track', query: query }, function(err, data) {
		if (err) {
		return console.log('Error occurred: ' + err);
		}
		// variable to store response to display info properly
		var response = data.tracks.items[0];
		// returned data
		// console.log(response);
		console.log("\nSong: " + response.name, "\nArtist: " + response.artists[0].name, "\nAlbum: " + response.album.name, "\nPreview: " + response.preview_url); 
	});
};

// export search function
module.exports = {
	spotifySearch: spotifySearch
}