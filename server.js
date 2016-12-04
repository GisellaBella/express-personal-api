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

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({

    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/gisellabella/express_self_api/README.md", 
    base_url: "http://serene-dawn-76546.herokuapp.com", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile",   description: "My Profile Points"},
      {method: "GET", path: "/api/books", description: "Get recent books"},
      {method: "GET", path: "/api/music", description: "Get recent music"},
      {method: "POST", path: "/api/books", description: "Add a new book"},
      {method: "POST", path: "/api/music", description: "Add new music"},
    ]
});
});


app.get('/api/profile', function profile(request, response){
  res.json(profile);
});

// Returns Books.
app.get('/api/books', function (req, res) {
  db.Book.find(function(err, book){
    if (err) { return console.log("Got Book error: " + err);}
    res.json(book);
  }); 
});

// Returns  Music.
app.get('/api/music', function (req, res) {
  db.Book.find(function(err, music){
    if (err) { return console.log("Got music error: " + err);}
    res.json(music);
  });
});


// Post Books.
app.post('/api/books', function (req, res) {
  var newBook = req.body;
  newBook._id = books.length + 1;
  books.push (req.body);
  res.json(books);
  });



//Post Music.
app.get('/api/music', function (req, res) {
  var newMusic= req.body;
  newMusic._id = music.length + 1;
  music.push (req.body);
  res.json(music);
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
