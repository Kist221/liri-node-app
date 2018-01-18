console.log("\n\n\n============================== LIRI IS RUNNING ==============================\n")

// require file system package built into node
var fs = require("fs");

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

// function to print & log outputs to console & log.txt (BONUS)
var logger = function(logThis) {
	// print to the console
	console.log(logThis);
	// write to the log.txt file
	fs.appendFile("log.txt", logThis, function(err) {
		if (err) {
			return console.log(err);
		}
	});
};

// function that determines command input and runs accordingly
var commandRunner = function() {
	if (command === "my-tweets") {
		logger("\nFetching My Tweets!\n");
		// my twitter feed function
		getTweets();
	} else if (command === "spotify-this-song") {
		// If no input provided then default to "The Sign" by Ace of Base.
		var inputSpot = commandInput || "The Sign - Ace of Base";
		logger("\nSearching Spotify for: " + inputSpot + "\n");
		// search spotify function - input needs to be a string 
		spotifySearch(inputSpot);
	} else if (command === "movie-this") {
		// If no input provided then default to Mr. Nobody.
		var inputMovie = commandInput || "Mr. Nobody";
		logger("\nSearching OMDB for: " + inputMovie + "\n");
		// search OMDB function - input needs to be a string 
		movieSearch(inputMovie);
	} else if (command === "do-what-it-says") {
		logger("\n>>> Reading Random.txt File <<<\n");
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



