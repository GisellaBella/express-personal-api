// musician.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MusicFavesSchema = new Schema ({
  music: String,
});

var Music = mongoose.model('Music', MusicFavesSchema);



module.exports = Music;


