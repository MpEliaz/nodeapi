var mongoose = require('mongoose');
var restful = require('node-restful');

Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: {type: String},
	apellido: {type: String}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);