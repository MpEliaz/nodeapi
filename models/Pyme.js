var mongoose = require('mongoose');

Schema = mongoose.Schema;

var PymeSchema = new Schema({
	nombre: {type: String},
	direccion: {type: String},
	comuna: {type: String},
	telefono: {type: String},
	email: {type: String},
	website: {type: String},
	estado: {type: Boolean},
	ubicacion: {
		lat: {type: Number},
		lng: {type: Number},
	},
	descripcion: {type: String},
	imagen_lista: {type: String},
	calificacion: {type: Number},
	//imagenes: [{type: Schema.Types.ObjectId, ref: 'Imagen'}],
	imagenes: [
		{
			url: String
		}],
	usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'}

});

module.exports = mongoose.model('Pyme', PymeSchema);