//var mongoose = require('mongoose');
var Evento = require('../models/Evento.js');

//GET obtener todas las eventos
exports.all = function(req, res) {
	Evento.find(function (err, eventos) {
		if(err)res.send(500, err.message);

		console.log('GET /Eventos');
		res.status(200).jsonp(eventos);
	});
}

//GET obtener un objeto
exports.byId = function(req, res) {
	Evento.findById(req.params.id, function(err, evento) {
		if(err) return res.send(500, err.message);

    console.log('GET /eventos/' + req.params.id);
        res.status(200).jsonp(evento);
	});
}

//POST insertar objeto
exports.add = function(req, res) {
	var e = new Evento({
		titulo: req.body.titulo,
		descripcion: req.body.descripcion,
		fecha: req.body.fecha,
		lugar: req.body.lugar,
		valor: req.body.valor,
		imagen: req.body.imagen
		
	});
	e.save(function(err, evento) {
		if(err)return res.send(500, err.message);
				res.status(200).jsonp(evento);
	});
}

//PUT modificar el objeto
exports.update = function(req, res) {
	
	var query = {_id: req.params.id};
	console.log(req.body);
	Evento.findOneAndUpdate(query, req.body, function(err, evento){
		if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(evento);
	});
};

//DELETE elimina registro
exports.remove = function(req, res) {
	Evento.findById(req.params.id, function(err, evento) {
		evento.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
}