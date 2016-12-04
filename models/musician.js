// musician.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MusicFavesSchema = new Schema ({
  musician: String,
});

var Musician = mongoose.model('Musician', MusicFavesSchema);



module.exports = Musician;


