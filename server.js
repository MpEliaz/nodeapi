var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/chiloeapp', function(err, res) {
  if(err) throw err;
  console.log('Conectado a la base de datos...');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;


app.get('/', function(req, res) {
	res.send("HOLI");
})
var api = require('./routes/api');
app.use('/api', api);

//Iniciar Servidor
app.listen(port,'localhost', function() {
	console.log("la magia esta en el puerto "+port);	
});

