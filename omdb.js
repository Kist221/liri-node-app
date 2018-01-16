// require request package
var request = require("request");

// import keys
var keys = require("./keys.js");

// seperate API keys
var omdb = keys.omdb;
console.log(omdb);
console.log("\nrunning\n");

var movieSearch = function(movieName) {
	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb;

	// This line is just to help us debug against the actual URL.
	console.log(queryUrl);

	request(queryUrl, function(error, response, body) {
		// If the request is successful
		if (!error && response.statusCode === 200) {
		// console log results
		console.log(body);
		// console.log("Release Year: " + JSON.parse(body));
		} else if (error) {
			// display error if occurs
			console.log(error);
		}
	});
};


movieSearch("the mask");