const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  nombre: String,
  descripcion: String,
  categoria: String,
  subcategoria: String,
  stock: Number,
  status: {
    type: String,
    default: "activo"
  }
});

module.exports = mongoose.model('productos', TaskSchema);