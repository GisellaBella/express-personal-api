// profile.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Pet = require("./pet.js");
var ProfileSchema = new Schema ({
                              name: String,
                              github_link: String,
                              linkedin_link: String,
                              facebook_link: String,
                              current_city_state: String,
                              current_photo: String,
                              time : { type : Date, default: Date.now },
                              //is_awake: Boolean,
                              pet:  {
                                    type: Schema.Types.ObjectId,
                                    ref: 'Pet'
                                     },
                              recent_books: {
                                    type: Schema.Types.ObjectId,
                                    ref: 'Book'
                                     },
                              listening_to: {
                                    type: Schema.Types.ObjectId,
                                    ref: 'Music'
                                     },
                     });

//ProfileSchema.methods.isAwake = function isAwake(params, callback) {


var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;

