// require fs (file system?) package
var fs = require("fs");

// require files
var getTweets = require("./twitter.js").getTweets;
var spotifySearch = require("./spotify.js").spotifySearch;
var movieSearch = require("./omdb.js").movieSearch;

var doIt = function() {
  // read random.txt file, utf8 encoding
  fs.readFile("random.txt", "utf8", function(error, data) {
    // log errors
    if (error) {
      return console.log(error);
    }
    // split data by commas
    var dataArr = data.split(",");
    // show data
    console.log("\nInstructions Say: " + dataArr);
    // loop through commands
    for (var i = 0; i < dataArr.length; i++) {
      if (dataArr[i] === "my-tweets") {
        console.log("\nFetching My Tweets!\n");
        // my twitter feed function
        getTweets();
      } else if (dataArr[i] === "spotify-this-song") {
        // next item in array should be input
        var n = ++i
        // If no input provided then default to "The Sign" by Ace of Base.
        var inputSpot = dataArr[n] || "The Sign - Ace of Base";
        console.log("\nSearching Spotify for: " + inputSpot + "\n");
        // search spotify function - input needs to be a string 
        spotifySearch(inputSpot);
      } else if (dataArr[i] === "movie-this") {
        // next item in array should be input
        var n = ++i
        // If no input provided then default to Mr. Nobody.
        var inputMovie = dataArr[n] || "Mr. Nobody";
        console.log("\nSearching OMDB for: " + inputMovie + "\n");
        // search OMDB function - input needs to be a string 
        movieSearch(inputMovie);
      } else {
        // inform possible commands
        console.log("\nPlease type a valid command:\nmy-tweets\nspotify-this-song + input\nmovie-this + input\ndo-what-it-says\n");
      }
    }
  });
}

// export search function
module.exports = {
  doIt: doIt
}