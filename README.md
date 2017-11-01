# Liri
Liri 

This app is run with simple commands in your terminal/bash.

if you want the twitter feed you type, node liri.js my-tweets.

if you want info on a song you type, node liri.js spotify-this-song and add a song title.

if you want movie info you type, node liri.js movie-this and the movie title.

if you want it to run the do this function you type, node liri.js do-what-it-says.

all of the keys are private and are stored in keys.js, also they are stored normally in a gitignore, but for this app they are left out of the git ignore so the homework can be graded.

the keys are then put in a var keys and are set in a global position and linked to the keys.js file in the liri.js file so that they are not hard coded into the app.

the accounts are stored in global vars as well.

all accounts were initialized in terminal in this directory.

a for loop is then created to run the user input and run through the process.argv correctlly.

after the for loop a switch case is run which accepts the userCommand and runs its corresponding function.



The twitterGrab function runs when the particular command is typed taking the user account and pulling the 20 most recent tweets, through a client.get, the for loop inside will iterate through tweets assigning them a number, the time stamp when they were created and putting the tweet itself into text. then console logging the returned data and a long line to break up the data for easier reading.



spotifyGrab is similar in its call method, the command is, node liri.js spotify-this-song. again the keys are hidden for security and called from the keys.js file.
 
this time though the var musicSearch runs through a conditional statement. 

if whats leftOver from the process.argv = undefined the spotify will default "the sign" by ace of base. else it will search the requested title.

the console.logs consist of dot notation found in the object to get the artist name, track name, album name, and a preview if one is available.



omdbGrab is aquired differently throught a URL.

a movieSearch var is created running through an if statement similar to the spotify call.

the response will be console logged as, title, year, rating, country, language, plot, actors, rotten tomatoe ratings and url.

doIt is a do it all function where if any of the userCommands are typed in it will give the desired result the fs.readfile goes into random.txt and runs the spotify request. 




