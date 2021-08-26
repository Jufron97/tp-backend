var mongoose = require('mongoose');
Schema = mongoose.Schema;

var UsuarioSchema = new mongoose.Schema({
    nombreApellido: { type: String},
    direccion: {type: String},
    telefono: {type: String},
    email: {type: String}
});

var Usuario = mongoose.model('usuario', UsuarioSchema);
module.exports = Usuario;