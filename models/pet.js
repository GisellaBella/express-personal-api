// pet.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetsSchema = new Pet ({
	pet_name: String,
});


var Pet = mongoose.model('Pet', PetsSchema);

module.exports = Pet;

