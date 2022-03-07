var mongoose = require('mongoose');
Schema = mongoose.Schema;

var UsuarioSchema = new mongoose.Schema({
    usuario: { type: String },
    contrasena: { type: String },
    nombreApellido: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    email: { type: String }
});

var Usuario = mongoose.model('usuario', UsuarioSchema);
module.exports = Usuario;