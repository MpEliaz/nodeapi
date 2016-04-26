var mongoose = require('mongoose');

Schema = mongoose.Schema;

var PersonaSchema = new Schema({
	nombre: {type: String},
	apellido: {type: String}
});

module.exports = mongoose.model('Persona', PersonaSchema);