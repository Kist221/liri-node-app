// import keys
var keys = require("./keys.js");

// seperate API keys
var twitter = keys.twitter;

// function to get tweets
var getTweets = function () {
	// call to get timeline tweets
	twitter.get('statuses/user_timeline', function(error, tweets, response) {
		if(error) console.log(error);
		// variable to store twitter response
		var tweetList = tweets;
		// loop through tweets array
		for (var i = 0; i < tweetList.length; i++) {
			// console log tweet info
			console.log("\n\n\n" + tweetList[i].created_at.slice(0, -14) + "\n" + tweetList[i].user.screen_name + " wrote:\n" + tweetList[i].text);
		}
		// Raw response object.
		// console.log(response);  
	});
};

module.exports = {
	getTweets: getTweets
}