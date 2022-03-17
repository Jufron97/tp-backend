const mongoose = require('mongoose');

export default class DB{

    async connect(){
        mongoose.connect('mongodb://localhost/PedidosYaNot', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(db => console.log('DB connected'))
        .catch(err => console.log(err));
    }

    async disconnect(){
        mongoose.connection.close();
    }
} 


