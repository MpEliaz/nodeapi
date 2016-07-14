var mongoose = require('mongoose');

Schema = mongoose.Schema;

var ImagenSchema = new Schema({
	nombre: {type: String},
	descripcion: {type: String},
	url: {type: String}
});

module.exports = mongoose.model('Imagen', ImagenSchema);