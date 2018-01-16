console.log("\n=============== RUN.JS RUNNING ===============\n")

// require files
var getTweets = require("./twitter.js").getTweets;
var spotifySearch = require("./spotify.js").spotifySearch;

// my twitter feed function
getTweets();
// search spotify function - (artist || album || track, query) - input needs to be strings 
spotifySearch('track', "She's So Mean");
