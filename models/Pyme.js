var mongoose = require('mongoose');

Schema = mongoose.Schema;

var PymeSchema = new Schema({
	nombre: {type: String},
	apellido: {type: String},
});

module.exports = mongoose.model('Pyme', PymeSchema);