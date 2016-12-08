// This file allows us to seed our application with data simply run: `node
// seed.js` from the root of this project folder.
var mongoose = require("mongoose");
var db = require('./models');

var book_list = [  
	{  	
	book_name: "Sapiens: A Brief History of Humankind", 
	plot_summary: "Well, just like it says on the cover, this book is the story of humanity and, like most of these kinds of book, it starts with us as apes and goes on to describe how we got bigger brains, stood on two feet, got clever with our hands, started talking to each other and wiped out the Neanderthals (although we did mate with a few of those before we killed or out-competed the remainder). This is where it gets really interesting, and where the author shares ideas I hadn’t encountered before. Apparently, the trick to functioning effectively in bigger groups is to have a shared ideology. These aren’t just religions (although religions certainly qualify), they are money, credit, political ideology, nations, the law etc.,etc. He describes how these things are all imaginary constructs which depend for their success on us all buying into them and believing in them, and how they are the glue that binds societies together.",
	type: "non-fiction"
	},
	{
	book_name: "The Grownup",
	plot_summary: "A canny young woman is struggling to survive...",
	type: "fiction"// by perpetrating various levels of mostly harmless fraud. On a rainy April morning, she is reading auras at Spiritual Palms when Susan Burke walks in. A keen observer of human behavior, our unnamed narrator immediately diagnoses beautiful, rich Susan as an unhappy woman eager to give her lovely life a drama injection. However, when the "psychic" visits the eerie Victorian home that has been the source of Susan's terror and grief, she realizes she may not have to pretend to believe in ghosts anymore. Miles, Susan's teenage stepson, doesn't help matters with his disturbing manner and grisly imagination. The three are soon locked in a chilling battle to discover where the evil truly lurks and what, if anything, can be done to escape it.",
	},
	{	
	book_name: "Ready Player One", 
	plot_summary: "If any of your formative years took place in the 80’s, this book is for you. It’s like a grand, wonderful party that greets you warmly at the door as you arrive, and puts you immediately at ease. The story will make you laugh, and remember, and sit on the edge of your seat as you follow Wade and his friends on their great quest. The story also provides us with a cautionary tale for both individuals and society; an allegory highlighting the damage that can be done to people and worlds when we opt for spending too much time in our virtual worlds, and not enough working on our real life and world. This story was the perfect love letter to the 80’s; the music, the movies, the culture, and yes, the video games. I loved it all. So even if one of those aspects wasn’t your strong suit, have no worries; just pick up your joystick, download this book… and ready player one.",
	type: "fiction"
	} 
				];

var music_list =	[
{
	  music: "Blondie",
},
{
	  music: "Beastie Boys",
},
{
	  music: "Massive Attack",
},
{
	  music: "Johnny Cash",
},
{
	  music: "Leonard Cohen",
},
{
	  music: "The Eagles",
},

];



// db.Profile.create(profile, function(err, profile){   
// 	if (err) {
// 		console.log("Profile DB create Error:", err);
// 		return;
// 	}
// console.log("Created new profile", profile._id); 
// process.exit();
// we're all done! Exit the program.
// });

db.Music.create(music_list, function(err, music){
      if (err) { return console.log(' music db err', err); }
      console.log(music.length + " music entries have been added.");


    });


db.Book.create(book_list, function(err, book){
      if (err) { return console.log('book db err', err); }
      console.log(book.length + " books have been added.");


    });






		// db.Music.remove( {}, function(err, music){
		// 	if (err) {return console.log ('problem deleting music', err);
		// 	}
		// 	console.log("removed.");
		//     process.exit();
		//   });
		// db.Book.remove({}, function(err, book){
		// 	if (err) {return console.log ('problem deleting book', err);
		// 	}
		// 	console.log("removed.");
		//     process.exit();
		//   });
