var mongoose = require('mongoose');
var Persona = mongoose.model('Persona');

//GET obtener todas las personas
exports.all = function(req, res) {
	Persona.find(function (err, personas) {
		if(err)res.send(500, err.message);

		console.log('GET /personas');
		res.status(200).jsonp(personas);
	});
}

//GET obtener un objeto
exports.byId = function(req, res) {
	Persona.findById(req.params.id, function(err, persona) {
		if(err) return res.send(500, err.message);

    console.log('GET /personas/' + req.params.id);
        res.status(200).jsonp(tvshow);
	});
}

//POST insertar objecto
exports.add = function(req, res) {
	var p = new Persona({
		nombre: req.body.nombre,
		apellido: req.body.apellido
	});
	p.save(function(err, persona) {
		if(err)return res.send(500, err.message);
				res.status(200).jsonp(persona);
	});
}

//PUT modificar el objecto
exports.update = function(req, res) {
	Persona.findById(req.params.id, function(err, persona) {
		persona.nombre = req.body.nombre;
		persona.apellido = req.body.apellido;

		persona.save(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(persona);
		});
	});
}

//DELETE elimina registro
exports.delete = function(req, res) {
	Persona.findById(req.params.id, function(err, persona) {
		persona.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
}