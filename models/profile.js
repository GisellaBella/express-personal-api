// profile.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
                              name: String,
                              github_link: String,
                              linkedin_link: String,
                              facebook_link: String,
                              current_city_state: String,
                              current_photo: String,
                              //is_awake: Boolean,
                              pets: [PetSchema],
                              recent_books: [RecentBooksSchema],
                              listening_to: [MusicFavesSchema],
                             });

//ProfileSchema.methods.isAwake = function isAwake(params, callback) {
  //implementation code goes here


var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
