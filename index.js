console.log('The story starts here.')
console.error('The bad things go here.')
console.log('Read the README file.')


// Things to do here..

/*
* Read the config file.
* Connect to mongodb
* Setup the Router object.
* Run...
*/

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const config = require('./.config');
const fs = require('fs');
var User = require('./models/user');
//init App
const app            = express();

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname +'/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var counter = 0;
//Home route.
app.get('/',function (req,res) {
  var name = "outbound";
  return res.sendFile(__dirname + '/templates/index.html', {name:name});

});
//post route for updating data
app.post('/get',function (req,res) {
  var str = "https//outbound-js.herokuapp.com/";
  var myData = new User(req.body);
  
     
  myData.save()
  .then(item => {
    counter = counter + 1;
    var key = "G" + myData._id;
    var mainkey = key.slice(-5);
    var middleman = str + mainkey;
    var original = req.body.yourlink;
    res.render('main', { middleman: middleman,original: original,counter: counter });
  })
  .catch(err => {
    res.status(400).send("404 This is not the page you are looking for...");
  });
});

app.route('/create').get(function (req,res){
	
	res.render('your link created');
});


//start server
app.listen(8000,function () {
	console.log('App listening on port 8000!');
});






