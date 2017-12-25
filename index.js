const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

<<<<<<< HEAD

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
=======
app.listen(process.env.PORT || 5000, ()=> console.log('example hello world'))
>>>>>>> fb47e79493215f7bff4d55ede26ca79e1aa354c3
