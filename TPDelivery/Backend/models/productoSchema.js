var mongoose = require('mongoose');

var ProductoSchema = new mongoose.Schema({
  nombre: String ,
  descripcion: String ,
  categoria: String ,
  subcategoria: String ,
  precio: Number,
  fechaCreacion: { type: Date, default: Date.now },
  imagePath: String
});

var Producto = mongoose.model('Producto', ProductoSchema);
module.exports = Producto