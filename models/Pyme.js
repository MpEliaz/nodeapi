var mongoose = require('mongoose');
var restful = require('node-restful');

Schema = mongoose.Schema;

var PymeSchema = new Schema({
	nombre: {type: String},
	direccion: {type: String},
	comuna: {type: String},
	telefono: {type: String},
	email: {type: String},
	website: {type: String},
	ubicacion: {
		lat: {type: Number},
		lng: {type: Number},
	},
	descripcion: {type: String},
	usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'}

});

module.exports = restful.model('Pyme', PymeSchema);