var mongoose = require('mongoose');
Schema = mongoose.Schema;

var ProductoSchema = new mongoose.Schema({
  nombre:        { type: String },
  descripcion:   { type: String },
  categoria:     { type: String },
  subcategoria:  { type: String },
  stock:         { type: Number },
  precio:        { type: Number },
  fechaCreacion: {type: Date, default: Date.now },
});

var LocalSchema = new mongoose.Schema({
  nombre:       { type: String, unique: true },
  productos:    { type: [ProductoSchema]},
  tags:         { type: [String]},
 //   order:          { type: [{
 //     orderId:  { type: String },
 //     date:     { type: Date, default: Date.now },
 //     dish:     { type: [DishSchema] },
 //     userId:   { type: String }
 //   }]}
});

var Local = mongoose.model('Local', LocalSchema);
module.exports = Local;