var mongoose = require('mongoose');

Schema = mongoose.Schema;

var ImagenSchema = new Schema({
	nombre: {type: String, required: "al dato es requerido"},
	descripcion: {type: String, required: "al dato es requerido"},
	url: {type: String, required: "al dato es requerido"}
});

module.exports = mongoose.model('Imagen', ImagenSchema);