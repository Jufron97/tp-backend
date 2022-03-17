var mongoose = require('mongoose');
var Producto = require('./productoSchema');

var LocalSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId(),
    nombre: { type: String, unique: true },
    descripcion: { type: String },
    costoEnvio: { type: Number },
    tiempoEnvio: { type: String },
    productos: { type: [Producto] },
    direccion: { type: String },
    tags: { type: [String] },
    imagePath: { type: String },
});

var Local = mongoose.model('Local', LocalSchema);
module.exports = Local;