var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");

var Profile = require("./profile");
var Book = require("./book.js");
var Music = require("./music.js");
var Pet = require("./pet.js");

module.exports.Profile = require("./profile.js");
module.exports.Book = require("./book.js");
module.exports.Music = require("./music.js");
module.exports.Pet = require("./pet.js");

