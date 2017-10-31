
// link to keys.js 
var keys = require("./keys.js");

//package dependencies 
var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");//read write file system..
var request = require("request");//to request the api's

//take in command for what does user wants to do? (tweet, movie, or song search)
var userCommand = process.argv[2];
//user input name of song, movie or tweet title
var lookUpTitle = process.argv;
var leftOver =  "";

for (var i = 3; i < lookUpTitle.length; i++) {
	leftOver += lookUpTitle[i] + " ";
//console.log(leftOver);

}
    

//Switch statements to declare what action to excute
 //function switchCommand(param) {
  //userCommand = userCommand || param
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
//}; //end of switch function

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



function spotifyGrab() {
	console.log(keys.spotifyKeys.client_id);
	var spotify = new Spotify({
		id: keys.spotifyKeys.client_id,
		secret: keys.spotifyKeys.client_secret

	})//ends var spotify, possibly remove semi-colon

	var musicSearch;
	if(leftOver === undefined) {
		musicSearch = "The Sign";	
	}else {
    musicSearch = leftOver;
  }
  //launch spotify search
  spotify
  	.search({
    type: "track",
    query: musicSearch
  }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
      //return;
    } else {

      console.log("Artist: ",  data.tracks.items[0].artists[0].name);
      console.log("Song: ",  data.tracks.items[0].name);
      console.log("Album: ", data.tracks.items[0].album.name);
      console.log("Preview Here: ", data.tracks.items[0].preview_url);
    }
  });
}//ends spotifyGrab

function ombdGrab() {
  console.log("Is this the movie you are you looking for?");

  //same as above, test if search term entered
  var movieSearch;
  if (leftOver === undefined) {
    movieSearch = "Mr. Nobody";
  } else {
    movieSearch = leftOver;
  };

  //store ombd request in a variable
  var ombdURL = 'http://www.omdbapi.com/?t=' + movieSearch + '&y=&plot=long&apikey=40e9cece';

  request(ombdURL, function(error, response, body) {
    // If the request is successful and not a error
    if (!error && response.statusCode == 200) {
    	//console.log(body);
      console.log("Title: " + JSON.parse(body)["Title"]);
      console.log("Year: " + JSON.parse(body)["Year"]);
      console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
      console.log("Country: " + JSON.parse(body)["Country"]);
      console.log("Language: " + JSON.parse(body)["Language"]);
      console.log("Plot: " + JSON.parse(body)["Plot"]);
      console.log("Actors: " + JSON.parse(body)["Actors"]);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
      console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
    }
  });
}; //end of movieGrab

function doIt(){

  console.log("Searching random.txt now");
	fs.readFile("./random.txt", "UTF8", function(error, data) {
	    if(error){
     		console.log(error);
     	}else{
        console.log(data)
     	//split data, declare variables
     	var dataArr = data.split(',');
        userCommand = dataArr[0];
        lookUpTitle = dataArr[1];
        // //if multi-word search term, add.
        for(i=2; i<dataArr.length; i++){
            lookUpTitle = lookUpTitle + "+" + dataArr[i];
        };
        //run action
		  switchCommand();

    	};//end else

    });//end readfile

};//end followTheTextbook

//switchCommand(); //evoke switchCommand





















