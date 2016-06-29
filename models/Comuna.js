var mongoose = require('mongoose');
var restful = require('node-restful');

Schema = mongoose.Schema;

var ComunaSchema = new Schema({
	nombre: {type: String},
	descripcion: {type: String},
	ubicacion: {
		lat: {type: Number},
		lng: {type: Number},
	},
	imagenes: [{type: Schema.Types.ObjectId, ref: 'Imagen'}],
});

module.exports = restful.model('Imagen', ComunaSchema);