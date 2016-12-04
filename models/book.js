// book.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema ({
	book_name: String,
	plot_summary: String,
});


var Book = mongoose.model('Book', BookSchema);



module.exports = Book;


