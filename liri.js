console.log("\n=============== RUN.JS RUNNING ===============\n")

// require files
var getTweets = require("./twitter.js").getTweets;
var spotifySearch = require("./spotify.js").spotifySearch;

// my twitter feed function
getTweets();

// search spotify function - input needs to be a string 
// If no input provided then default to "The Sign" by Ace of Base.
var input = "" || "The Sign Ace of Base";
spotifySearch(input);
