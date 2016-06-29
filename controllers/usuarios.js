
	var Usuario = require('../models/Usuario.js');

	//GET obtener todas las personas
	exports.all = function(req, res) {
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
	exports.add = function(req, res) {
		var p = new Usuario({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
		});
		p.save(function(err, persona) {
			if(err)return res.send(500, err.message);
					res.status(200).jsonp(persona);
		});
	};

	//PUT modificar el objeto
	exports.update = function(req, res) {
		
		var query = {_id: req.params.id};

		 console.log(req.body);
		Usuario.findOneAndUpdate(query, req.body, function(err, usuario){
			if(err) return res.status(500).send(err.message);
				res.status(200).jsonp(usuario);
		});
	};

	//DELETE elimina registro
	exports.remove = function(req, res) {
		Usuario.findById(req.params.id, function(err, persona) {
			persona.remove(function(err) {
				if(err) return res.status(500).send(err.message);
				res.status(200).send();
			});
		});
	};
