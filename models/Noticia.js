var mongoose = require('mongoose');

Schema = mongoose.Schema;

var NoticiaSchema = new Schema({
	titulo: {type: String},
	cuerpo: {type: String},
	fecha: {type: Date},
	url: {type: String}
});

module.exports = mongoose.model('Noticia', NoticiaSchema);