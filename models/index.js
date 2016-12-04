var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");

var Profile = require("./profile");
var Book = require("./book.js");
var Musician = require("./musician.js");
var Pet = require("./pet.js");

module.exports.Profile = require("./profile.js");
module.exports.Book = require("./book.js");
module.exports.Musician = require("./musician.js");
module.exports.Pet = require("./pet.js");

