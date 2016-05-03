//var mongoose = require('mongoose');
//var Pyme = mongoose.model('Pyme');

//GET obtener todas las pymes
exports.all = function(req, res) {
	Pyme.find(function (err, pymes) {
		if(err)res.send(500, err.message);

		console.log('GET /Pymes');
		res.status(200).jsonp(pymes);
	});
}

//GET obtener un objeto
exports.byId = function(req, res) {
	Pyme.findById(req.params.id, function(err, pyme) {
		if(err) return res.send(500, err.message);

    console.log('GET /pymes/' + req.params.id);
        res.status(200).jsonp(pyme);
	});
}

//POST insertar objecto
exports.add = function(req, res) {
	var p = new Pyme({
		nombre: req.body.nombre,
		direccion: req.body.direccion,
		comuna: req.body.comuna,
		telefono: req.body.telefono,
		email: req.body.email,
		website: req.body.website,
		ubicacion:{
			lat: req.body.lat,
			lng: req.body.lng,
		},
		nombre: req.body.nombre,
		apellido: req.body.apellido,
	});
	p.save(function(err, pyme) {
		if(err)return res.send(500, err.message);
				res.status(200).jsonp(pyme);
	});
}

//PUT modificar el objecto
exports.update = function(req, res) {
	Pyme.findById(req.params.id, function(err, pyme) {
		pyme.nombre = req.body.nombre;
		pyme.apellido = req.body.apellido;

		pyme.save(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(pyme);
		});
	});
}

//DELETE elimina registro
exports.delete = function(req, res) {
	Pyme.findById(req.params.id, function(err, pyme) {
		pyme.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
}