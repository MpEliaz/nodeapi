var mongoose = require('mongoose');

Schema = mongoose.Schema;

var EventoSchema = new Schema({
	titulo: {type: String, required: "El titulo es obligatorio"},
	descripcion: {type: String, required: "La descripcion es obligatoria"},
	fecha: {type: Date, required: "La fecha es obligatoria"},
	comuna: {type: Schema.ObjectId, ref: "Comuna", required: "la comuna es obligatoria"},
	valor: {type: Number, required: "El valor es obligatorio"},
	imagenes: [{type: Schema.Types.ObjectId, ref: 'Imagen'}]
});

module.exports = mongoose.model('Evento', EventoSchema);