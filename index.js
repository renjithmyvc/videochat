const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(process.env.PORT || 5000);
console.log(process.env.PORT , ' is the magic port');
