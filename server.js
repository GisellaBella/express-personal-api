// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(request, response) {
  // TODO: Document all your api endpoints below
  ressponse.json({

    message: "Welcome to my personal api! Here's what you need to know to have a fully 'cruddy' expperience!",
    documentation_url: "https://github.com/gisellabella/express_self_api/README.md", 
    base_url: "http://serene-dawn-76546.herokuapp.com", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile",   description: "My Profile Points"},
      {method: "GET", path: "/api/book", description: "Get my recent books"},
      {method: "GET", path: "/api/book/_id", description: "Get a recent book"},
      {method: "GET", path: "/api/music_id", description: "Get a recent music record"},
      {method: "POST", path: "/api/book", description: "Add a new book"},
      {method: "POST", path: "/api/music", description: "Add new music"},
      {method: "Delete", path: "/api/book", description: "Delete a book"},
      {method: "Delete", path: "/api/music", description: "Delete music"},
    ]
});
});


app.get('/api/profile', function profile(request, response){
  response.json({

        name: "Gisella Walter",
        github_link: "https://github.com/GisellaBella",
        linkedin_link: "https://www.linkedin.com/in/gisellawalter",
        facebook_link: "https://www.facebook.com/gisella.walter",
        current_city_state: "Boulder, CO",
        current_photo: "https://www.facebook.com/photo.php?fbid=10154114697147149&l=5b84c80589",
          //is_awake: Boolean,
          //"time" : ,
        pet: [
          {name: "Coco"}
        ],
        recent_books: [
          { book_name: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
            plot_summary: "For decades we've been told that positive thinking is the key to a happy, rich life. F*ck positivity, Mark Manson says..."
          },
          {
            book_name: "Emotional Agility",
            plot_summary: " way we respond to these internal experiences drives our actions, careers,",
          },
        ],
        listening_to: [
            {music: "Ryan Adams"},
            {music: "Ray LaMontagne"},
            {music: "PJ Harvey"},
            {music: "Lucinda Williams"},
            {music: "Pixies"},
        ],
              
  });
});

// Returns Books.
app.get('/api/book', function (request, response) {
  db.Book.find(function(err, book){
    if (err) { return console.log("Got a Get Books error: " + err);}
    response.json(book);
  }); 
});

// Returns  Music.
app.get('/api/music', function (request, response) {
  db.Book.find(function(err, music){
    if (err) { return console.log("Got a get music error: " + err);}
    response.json(music);
  });
});


// Post Books.
app.post('/api/book', function (request, response) {
  var newBook = request.body;
  newBook._id = book.length + 1;
  book.push (request.body);
  response.json(book);
  });



//Post Music.
app.get('/api/music', function (request, response) {
  var newMusic= request.body;
  newMusic._id = music.length + 1;
  music.push (request.body);
  response.json(music);
});


// delete Book
app.delete('/api/book/:id', function (request, response) {
// get book id from url params (request.params)
console.log('book delete', request.params);
var bookId = request.params.id;
//find the id of the book to remove
db.book.findOneAndRemove({ _id: bookId }, function (err, deletedBook) {
response.json(deletedBook);
});
});

// delete Music
app.delete('/api/music/:id', function (request, response) {
// get book id from url params (request.params)
console.log('music to delete', request.params);
var musicId = request.params.id;
//find the id of the book to remove
db.music.findOneAndRemove({ _id: musicId }, function (err, deletedMusic) {
response.json(deletedMusic);
}); 
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
