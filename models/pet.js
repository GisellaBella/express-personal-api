// pet.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Pet ({
	pet_name: String,
});


var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;

