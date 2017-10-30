
// commands to be run for switch case
// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says


// link to keys.js 
var keys = require("./keys.js");

//package dependencies 
var twitter = require("twitter");
// var spotify = require("node-spotify-api");
var fs = require("fs");//read write file system..
var request = require("request");//to request the api's

//take in command for what does user wants to do? (tweet, moveie, or song search)
var userCommand = process.argv[2]
//user input name of song, movie or tweet title
var lookUpTitle = process.argv[3]

//Switch statements to declare what action to excute
function switchCommand(param) {
  userCommand = userCommand || param
  switch (userCommand) {
    case "my-tweets":
      twitterGrab();
      break;

    case "spotify-this-song":
      spotifyGrab();
      break;

    case "movie-this":
      ombdGrab();
      break;

    case "do-what-it-says":
      doIt();
      break;

  }
}; //end of switch function

function twitterGrab() {
	
	console.log("My Tweets:");
	var client = new twitter(keys.twitterKeys);
  	var parameters = {
  		screen_name: "kyleconely4",
  		count: 20
  		
  	};
	client.get("statuses/user_timeline", parameters, function(error, tweets, response) {
    console.log(error);
    if (!error) {

      for (i = 0; i < tweets.length; i++) {
        var returnedData = ("Number: " + (i + 1) + "\n" + tweets[i].created_at + "\n" + tweets[i].text + "\n");
        console.log(returnedData);
        console.log("-------------------------");
       
      }
    };
  });

};// ends twitterGrab

twitterGrab();





















