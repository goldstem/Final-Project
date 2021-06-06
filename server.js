/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Max Goldstein
 * Email: goldstem@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')

var itemData = require('./database.json')

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: null }))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function (req, res) {
  console.log("  -- req.params:", req.params)
  res.status(200).render('htmlpage', {
    databasePage: true,
    itemContainer: itemData
  })
});

app.get('*', function (req, res) {
  console.log("  -- req.params:", req.params)
  res.status(404).render('htmlpage', {
    database: false,
    itemContainer: itemData
  })
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

//test 2 please work
