console.log("\n=============== RUN.JS RUNNING ===============\n")

// require keys.js file
var keys = require("./keys.js");

// seperate API keys
var twitter = keys.twitter;
var spotify = keys.spotify;

// call to get timeline tweets
twitter.get('statuses/home_timeline', function(error, tweets, response) {
	if(error) throw error;
	// The tweets.
	console.log(tweets[0]); 
	// Raw response object.
	// console.log(response);  
});