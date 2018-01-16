// require request package
var request = require("request");

// import keys
var keys = require("./keys.js");

// seperate API keys
var omdb = keys.omdb;

var movieSearch = function(movieName) {
	// create query URL to feed request, instead of the silly AJAX fetching
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb;
	// request protocol
	request(queryUrl, function(error, response, body) {
		// If the request is successful
		if (!error && response.statusCode === 200) {
		// store results to reference
		var body = JSON.parse(body);
		// print the results
		console.log("\nTitle: " + body.Title + "\nReleased: " + body.Year + "\nIMDB Rating: " + body.Ratings[0].Value + "\nTomatometer Rating: " + body.Ratings[1].Value + "\nCountry(ies) Produced: " + body.Country + "\nLanguages Available: " + body.Language + "\nPlot: " + body.Plot + "\nActors: " + body.Actors + "\n");
		} else if (error) {
			// display error if occurs
			console.log(error);
		}
	});
};

// export search function
module.exports = {
	movieSearch: movieSearch
}