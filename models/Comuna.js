var mongoose = require('mongoose');

Schema = mongoose.Schema;

var ComunaSchema = new Schema({
	nombre: {type: String, required: "El nombre es obligatorio"},
	descripcion: {type: String, required: "La descripcion es obligatoria"},
});

module.exports = mongoose.model('Comuna', ComunaSchema);