var mongoose = require('mongoose');

Schema = mongoose.Schema;

var PymeSchema = new Schema({
	nombre: {type: String, required:"El campo es obligatorio"},
	direccion: {type: String, required:"El campo es obligatorio"},
	comuna: {type: Schema.Types.ObjectId, ref: 'Comuna'},
	telefono: {type: String},
	email: {type: String},
	website: {type: String},
	estado: {type: Boolean},
	ubicacion: {
		lat: {type: Number, required:"El campo es obligatorio"},
		lng: {type: Number, required:"El campo es obligatorio"},
	},
	descripcion: {type: String},
	imagen_lista: {type: String},
	calificacion: {type: Number},
	imagenes: [{type: Schema.Types.ObjectId, ref: 'Imagen'}],
/*	imagenes: [
		{
			url: String
		}],*/
	usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'}

});

module.exports = mongoose.model('Pyme', PymeSchema);