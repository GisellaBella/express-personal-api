// musician.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MusicSchema = new Schema ({
  music: String,
});

var Music = mongoose.model('Music', MusicSchema);



module.exports = Music;



