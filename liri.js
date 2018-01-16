console.log("\n============================== RUN.JS RUNNING ==============================\n")

// require files
var getTweets = require("./twitter.js").getTweets;
var spotifySearch = require("./spotify.js").spotifySearch;

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
		var input = commandInput || "The Sign - Ace of Base";
		console.log("\nSearching Spotify for: " + input + "\n");
		// search spotify function - input needs to be a string 
		spotifySearch(input);
	} else {
		// inform possible commands
		console.log("\nPlease type a valid command:\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says\n");
	}
};

// checks for a command
if (command !== undefined) {
	// print command
	console.log("\nCommand: " + command);
	commandRunner();
} else {
	// inform possible commands
	console.log("\nPlease type a valid command:\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says\n");
}



