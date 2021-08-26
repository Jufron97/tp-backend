var mongoose = require('mongoose');
Schema = mongoose.Schema;
var Usuario = require('./usuario');

var PedidoSchema = new mongoose.Schema({
    fechaCreacion: { type: Date, default: Date.now },
    usuario:   {type: Usuario},
    local: {
        nombre: String,
        idLocal: String,
        productos
    }
});

var Pedido = mongoose.model('Pedido', PedidoSchema);
module.exports = Pedido;