
	var Usuario = require('../models/Usuario.js');

	//GET obtener todas las personas
	exports.allUser = function(req, res) {
		Usuario.find(function (err, personas) {
			if(err)res.send(500, err.message);

			console.log('GET /usuarios');
			res.status(200).jsonp(personas);
		});
	};

	//GET obtener un objeto
	exports.byId = function(req, res) {
		Usuario.findById(req.params.id, function(err, persona) {
			if(err) return res.send(500, err.message);

	    console.log('GET /usuarios/' + req.params.id);
	        res.status(200).jsonp(persona);
		});
	}

	//POST insertar objecto
	exports.addUser = function(req, res) {
		var p = new Usuario({
			nombre: req.body.nombre,
			apellido: req.body.apellido
		});
		p.save(function(err, persona) {
			if(err)return res.send(500, err.message);
					res.status(200).jsonp(persona);
		});
	};

	//PUT modificar el objecto
	exports.updateUser = function(req, res) {
		Usuario.findById(req.params.id, function(err, persona) {
			persona.nombre = req.body.nombre;
			persona.apellido = req.body.apellido;

			persona.save(function(err) {
				if(err) return res.status(500).send(err.message);
				res.status(200).jsonp(persona);
			});
		});
	};

	//DELETE elimina registro
	exports.deleteUser = function(req, res) {
		Usuario.findById(req.params.id, function(err, persona) {
			persona.remove(function(err) {
				if(err) return res.status(500).send(err.message);
				res.status(200).send();
			});
		});
	};
