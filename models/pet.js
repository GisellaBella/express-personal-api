// pet.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema ({
	name: String,
});


var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;