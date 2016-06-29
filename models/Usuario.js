var mongoose = require('mongoose');

Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: {type: String},
	apellido: {type: String},
	telefono: {type: String},
	email: {type: String},
	comuna: {type: String},
	
	
});

module.exports = mongoose.model('Usuario', UsuarioSchema);