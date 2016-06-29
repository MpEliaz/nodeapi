var mongoose = require('mongoose');

Schema = mongoose.Schema;

var EventoSchema = new Schema({
	titulo: {type: String},
	descripcion: {type: String},
	fecha: {type: Date},
	comuna: {type: String},
	valor: {type: Number},
	imagen: {type: String}
});

module.exports = mongoose.model('Evento', EventoSchema);