var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/jic', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});


var models = require('./models/Persona') (app, mongoose);
var PersonasCrtl = require('./controllers/personas');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res) {
	res.json({message:'HOlI'});
});

router.route('/personas')
	.get(PersonasCrtl.all)
	.post(PersonasCrtl.add);

router.route('/personas/:id')
	.get(PersonasCrtl.byId)
	.put(PersonasCrtl.update)
	.delete(PersonasCrtl.delete);


app.use('/api', router);

//Iniciar Servidor
app.listen(port, function() {
	console.log("la magia esta en el puerto "+port);	
});

