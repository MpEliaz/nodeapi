//var mongoose = require('mongoose');
var Pyme = require('../models/Pyme.js');
var Imagen = require('../models/Imagen.js');

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
	Pyme
	.findOne({_id: req.params.id})
	.populate('imagenes')
	.populate('comuna')
	.exec(function(err, pyme) {
		if(err) return res.send(500, err.message);

    	console.log('GET /pymes/' + req.params.id);
        res.status(200).jsonp(pyme);
	});
}

//POST insertar objeto
exports.add = function(req, res) {
	var p = new Pyme({
		nombre: req.body.nombre,
		direccion: req.body.direccion,
		comuna: req.body.comuna,
		telefono: req.body.telefono,
		email: req.body.email,
		website: req.body.website,
		estado: true,
		imagen_lista: req.body.imagen_lista,
		calificacion: req.body.calificacion,
		imagenes: [],
		ubicacion:{
			lat: req.body.lat,
			lng: req.body.lng,
		}
	});
	p.save(function(err, pyme) {
		if(err)return res.status(500).jsonp(err.message);
				res.status(200).jsonp(pyme);
	});
}

//PUT modificar el objeto
exports.update = function(req, res) {
	
	var query = {_id: req.params.id};
	
	Pyme.findOneAndUpdate(query, req.body, function(err, pyme){
		if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(pyme);
	});
};

//DELETE elimina registro
exports.remove = function(req, res) {
	Pyme.findById(req.params.id, function(err, pyme) {
		pyme.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
}

//INSERTA UNA IMAGEN A LA BD Y ASOCIA A LA PYME
exports.insertarImagen = function(req, res){
	Pyme.findById(req.params.id, function(err, pyme) {
		if(err) return res.send(500, err.message);
		console.log(req.body);

		var imagen = new Imagen({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			url: req.body.url
		});
		imagen.save();
		pyme.imagenes.push(imagen);
		pyme.save();
    	console.log('Imagen: '+imagen._id+' Agregada a pyme: ' + req.params.id);
        res.status(200).jsonp(pyme);
	});
}