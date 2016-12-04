// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_profile = {
                              "name": "Gisella Walter",
                              "github_link": "https://github.com/GisellaBella",
                              "linkedin_link": "https://www.linkedin.com/in/gisellawalter",
                              "facebook_link": "https://www.facebook.com/gisella.walter",
                              "current_city_state": "Boulder, Co",
                              "current_photo": "https://www.facebook.com/photo.php?fbid=10154114697147149&l=5b84c80589",
                              //is_awake: Boolean,
                              //"time" : ,
                              "pet": [{"name": "coco"}],
                              "recent_books": [
                              	{	
								"book_name": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
								"plot_summary": "For decades we've been told that positive thinking is the key to a happy, rich life. F*ck positivity, Mark Manson says..."
							  	},
							 	{
							 	"book_name": "Emotional Agility",
 								"plot_summary": " way we respond to these internal experiences drives our actions, careers,",
 							 	},
 							 ],
  							  "listening_to": [
  							  {"musician": "Ryan Adams"},
  							  {"musician": "Ray LaMontagne"},
  							  {"musician": "PJ Harvey"},
  							  {"musician": "Lucinda Williams"},
  							  {"musician": "Pixies"},],
                  };

db.Profile.create(new_profile, function(err, profile){
   if (err){
   return console.log("Error:", err);
  }

console.log("Created new profile", profile._id);
process.exit(); // we're all done! Exit the program.
});
