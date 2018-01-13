console.log("\n=============== RUN.JS RUNNING ===============\n")

// require keys.js file
var keys = require("./keys.js");

// seperate API keys
var twitter = keys.twitter;
var spotify = keys.spotify;

// variable to store twitter response
var tweetList;

// call to get timeline tweets
twitter.get('statuses/user_timeline', function(error, tweets, response) {
	if(error) console.log(error);
	// The tweets.
	tweetList = tweets;

	// loop through tweets array
	for (var i = 0; i < tweetList.length; i++) {
		// console log tweet info
		console.log("\n\n\n" + tweetList[i].user.screen_name + " wrote:\n" + tweetList[i].text + "\n\non: " + tweetList[i].created_at.slice(0, -14));
	}
	// Raw response object.
	// console.log(response);  
});