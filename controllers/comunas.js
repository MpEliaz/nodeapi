var Comuna = require('../models/Comuna.js');

//GET obtener todas las comunas
exports.all = function(req, res) {
	Comuna.find(function (err, comunas) {
		if(err)res.send(500, err.message);

		console.log('GET /Comunas');
		res.status(200).jsonp(comunas);
	});
}

//GET obtener una comuna
exports.byId = function(req, res) {
	Comuna.findById(req.params.id, function(err, comuna) {
		if(err) return res.send(500
		, err.message);

    console.log('GET /comunas/' + req.params.id);
        res.status(200).jsonp(cpmuna);
	});
}

//POST insertar comuna
exports.add = function(req, res) {
	var c = new Comuna({
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		
	});
    console.log('GET /Comunas: '+c);
	c.save(function(err, comuna) {
		if(err)return res.status(500).send(err.message);
				res.status(200).send(comuna);
	});
}

//PUT modificar el objeto
exports.update = function(req, res) {
	
	var query = {_id: req.params.id};
	console.log(req.body);
	Comuna.findOneAndUpdate(query, req.body, function(err, comuna){
		if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(comuna);
	});
};

//DELETE elimina registro
exports.remove = function(req, res) {
	Comuna.findById(req.params.id, function(err, comuna) {
		comuna.remove(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
}