var Imagen = require('../models/Imagen.js');

//GET obtener todas las Imagenes
exports.all = function(req, res) {
	Imagen.find(function (err, imagenes) {
		if(err)res.status(500).send(err.message);

		console.log('GET /imagenes');
		res.status(200).jsonp(imagenes);
	});
}

//GET obtener una Imagen
exports.byId = function(req, res) {
	Imagen.findById(req.params.id, function(err, imagen) {
		if(err)res.status(500).send(err.message);

    console.log('GET /imagenes/' + req.params.id);
        res.status(200).jsonp(imagen);
	});
}

//POST insertar Imagen
exports.add = function(req, res) {
	var i = new Imagen({
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		
	});
    console.log('GET /imagenes: '+i);
	i.save(function(err, imagen) {
		if(err)return res.status(500).send(err.message);
				res.status(200).send(imagen);
	});
}

//PUT modificar el objeto
exports.update = function(req, res) {
	
	var query = {_id: req.params.id};
	console.log(req.body);
	Imagen.findOneAndUpdate(query, req.body, function(err, imagen){
		if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(imagen);
	});
};

//DELETE elimina registro
exports.remove = function(req, res) {
	Imagen.findById(req.params.id, function(err, imagen) {
		Imagen.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
}