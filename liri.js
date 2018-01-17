console.log("\n\n\n============================== LIRI IS RUNNING ==============================\n")

// require files
var getTweets = require("./twitter.js").getTweets;
var spotifySearch = require("./spotify.js").spotifySearch;
var movieSearch = require("./omdb.js").movieSearch;
var doIt = require("./readIt.js").doIt;

// Take in the command line arguments
var nodeArgs = process.argv;
// first input is the command
var command = nodeArgs[2];
// variable for command inputs
var commandInput = "";

// loop for combining input strings
for (var i = 3; i < nodeArgs.length; i++) {
  // Build a string with the input.
  commandInput = commandInput + " " + nodeArgs[i];
}

// function that determines command input and runs accordingly
var commandRunner = function() {
	if (command === "my-tweets") {
		console.log("\nFetching My Tweets!\n");
		// my twitter feed function
		getTweets();
	} else if (command === "spotify-this-song") {
		// If no input provided then default to "The Sign" by Ace of Base.
		var inputSpot = commandInput || "The Sign - Ace of Base";
		console.log("\nSearching Spotify for: " + inputSpot + "\n");
		// search spotify function - input needs to be a string 
		spotifySearch(inputSpot);
	} else if (command === "movie-this") {
		// If no input provided then default to Mr. Nobody.
		var inputMovie = commandInput || "Mr. Nobody";
		console.log("\nSearching OMDB for: " + inputMovie + "\n");
		// search OMDB function - input needs to be a string 
		movieSearch(inputMovie);
	} else if (command === "do-what-it-says") {
		console.log("\n>>> Reading Command File <<<\n");
		// run function to read file and run commands
		doIt();
	} else {
		// inform possible commands
		console.log("\nPlease type a valid command:\nmy-tweets\nspotify-this-song + input\nmovie-this + input\ndo-what-it-says\n");
	}
};

// checks for a command
if (command !== undefined) {
	// print command
	console.log("\nCommand: " + command);
	commandRunner();
} else {
	// inform possible commands
	console.log("\nPlease type a valid command:\nmy-tweets\nspotify-this-song + input\nmovie-this + input\ndo-what-it-says\n");
}



