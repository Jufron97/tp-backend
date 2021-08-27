var mongoose = require('mongoose');
Schema = mongoose.Schema;

var ProductoSchema = new mongoose.Schema({
  nombre: { type: String },
  descripcion: { type: String },
  categoria: { type: String },
  subcategoria: { type: String },
  precio: { type: Number },
  fechaCreacion: { type: Date, default: Date.now },
});

var LocalSchema = new mongoose.Schema({
  nombre: { type: String, unique: true },
  descripcion: { type: String },
  costoEnvio: { type: Number },
  tiempoEnvio: { type: String },
  productos: { type: [ProductoSchema] },
  direccion: { type: String },
  tags: { type: [String] },
});

var Local = mongoose.model('Local', LocalSchema);
module.exports = Local;