// book.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecentBooksSchema = new Schema ({
	book_name: String,
	plot_summary: String,
});


var Book = mongoose.model('Book', RecentBooksSchema);



module.exports = Book;


